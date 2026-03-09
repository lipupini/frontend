import type { NextApiRequest, NextApiResponse } from 'next'
import useConfig from 'next/config'
import path from 'path'
import { AppApiResponse } from '../../types'

const glob = require('glob')
const fs = require('fs')

const CACHE_DIR_NAME = '.file-cache'

const escapeRegExp = (string: string) => {
	return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

/** Sanitize account for use in cache filename (no path traversal). */
function sanitizeAccountForCache(account: string): string {
	return path.basename(account).replace(/[^a-zA-Z0-9._-]/g, '_')
}

/**
 * Get full file list for an account: from filesystem cache if valid, otherwise
 * build from disk (glob) and write cache for next time (passthrough).
 */
function getFileList(
	publicFolder: string,
	filesFolder: string,
	account: string,
	baseDir: string
): string[] {
	const cacheDir = path.join(baseDir, CACHE_DIR_NAME)
	const cacheFileName = sanitizeAccountForCache(account) + '.json'
	const cachePath = path.join(cacheDir, cacheFileName)

	const folderStat = fs.existsSync(filesFolder) && fs.statSync(filesFolder)
	if (!folderStat || !folderStat.isDirectory()) {
		throw new Error('Files folder not found')
	}

	const cacheExists = fs.existsSync(cachePath)
	const cacheValid =
		cacheExists &&
		fs.statSync(cachePath).mtimeMs >= folderStat.mtimeMs

	if (cacheValid) {
		const raw = fs.readFileSync(cachePath, 'utf8')
		return JSON.parse(raw) as string[]
	}

	// Build from filesystem and write cache
	let files = glob.sync(filesFolder + '/**/*', { nodir: true })
	for (let i = 0; i < files.length; i++) {
		files[i] = files[i].replace(
			new RegExp('^' + escapeRegExp(publicFolder)),
			''
		)
	}

	try {
		if (!fs.existsSync(cacheDir)) {
			fs.mkdirSync(cacheDir, { recursive: true })
		}
		fs.writeFileSync(cachePath, JSON.stringify(files), 'utf8')
	} catch (e) {
		// Non-fatal: proceed without cache
	}

	return files
}

export default function Handler(
	req: NextApiRequest,
	res: NextApiResponse<AppApiResponse>
) {
	const { serverRuntimeConfig } = useConfig()
	const query = req.query
	const { account, page, perPage, sort } = query
	const pageNumber: number = parseInt(page as string)

	if (!sort) {
		throw new Error('No sort specified')
	}

	if (!perPage) {
		throw new Error('No perPage specified')
	}

	const perPageInt = parseInt(perPage as string)
	if (perPageInt < 1) {
		throw new Error('Invalid perPage specified')
	}

	if (!['random', 'filename'].includes(sort.toString())) {
		throw new Error('Unexpected value for sort')
	}

	if (!pageNumber || pageNumber < 1) {
		throw new Error('No page specified')
	}

	const publicFolder = serverRuntimeConfig.baseDir + '/public'
	const filesFolder = publicFolder + '/accounts/' + account

	let files = getFileList(
		publicFolder,
		filesFolder,
		account as string,
		serverRuntimeConfig.baseDir
	)
	const totalFiles = files.length

	if (sort === 'random') {
		// Nice @ https://stackoverflow.com/a/56464683
		files = files.sort(() => (Math.random() > 0.5) ? 1 : -1)
	}

	if (files.length > perPageInt) {
		files = files.slice((pageNumber - 1) * perPageInt, perPageInt * pageNumber)
	}

	res.status(200).json({
		data: files as unknown as AppApiResponse['data'],
		meta: {
			total: totalFiles,
		},
	})
}
