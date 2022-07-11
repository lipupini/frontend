import type { NextApiRequest, NextApiResponse } from 'next'
import useConfig from 'next/config'
import { AppApiResponse } from '../../types'

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
	const query = req.query
	// `account` should be present because it's defined in the route
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

	if (!fs.existsSync(filesFolder)) {
		throw new Error('Files folder not found')
	}

	let files = glob.sync(filesFolder + '/**/*', { nodir: true})
	const totalFiles = files.length

	for (let i = 0; i < totalFiles; i++) {
		files[i] = files[i].replace(
			new RegExp('^' + escapeRegExp(publicFolder)), '')
	}

	if (files.length > perPageInt) {
		files = files.slice((pageNumber - 1) * perPageInt, perPageInt * pageNumber)
	}

	if (sort === 'random') {
		// Nice @ https://stackoverflow.com/a/56464683
		files = files.sort(() => (Math.random() > 0.5) ? 1 : -1)
	}

	res.status(200).json({
		data: files,
		meta: {
			total: totalFiles,
		}
	})
}
