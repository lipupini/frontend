import type { NextApiRequest, NextApiResponse } from 'next'
import useConfig from 'next/config'
import { AppApiResponse } from '../../types'

// @TODO: Make this configurable
const perPage = 36

const glob = require('glob')
const fs = require('fs')

const escapeRegExp = (string: string) => {
	return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

export default function Handler(
	req: NextApiRequest,
	res: NextApiResponse<AppApiResponse>
) {
	const {serverRuntimeConfig} = useConfig()
	const query = req.query;
	const { account, page } = query;
	const pageNumber: number = parseInt(page as string)

	if (!pageNumber) {
		throw new Error('No page specified')
	}

	const publicFolder = serverRuntimeConfig.baseDir + '/public'
	const filesFolder = publicFolder + '/accounts/' + account

	if (!fs.existsSync(filesFolder)) {
		throw new Error('Files folder not found')
	}

	let files = glob.sync(filesFolder + '/**/*', { nodir: true})
	const totalFiles = files.length

	for (let i = 0; i < totalFiles; i++) {
		files[i] = files[i].replace(
			new RegExp('^' + escapeRegExp(publicFolder)), '')
	}

	if (files.length > perPage) {
		files = files.slice((pageNumber - 1) * perPage, perPage * pageNumber)
	}

	res.status(200).json({
		data: files,
		meta: {
			total: totalFiles,
			hasNext: pageNumber * perPage < totalFiles,
			hasPrev: pageNumber > 1,
		}
	})
}
