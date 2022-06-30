import type { NextApiRequest, NextApiResponse } from 'next'

const glob = require('glob');

function escapeRegExp(string: string) {
	return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

const getAllFiles = () => {
	const publicFolder = process.env.APP_BASE_PATH + '/public'
	const filesFolder = publicFolder + '/accounts/' + process.env.ACCOUNT_ARCHIVE_FOLDER_NAME
	let files = glob.sync(filesFolder + '/media/posts/**/*', { nodir: true})
	let totalFiles = files.length

	for (let i = 0; i < totalFiles; i++) {
		files[i] = files[i].replace(
			new RegExp('^' + escapeRegExp(process.env.APP_BASE_PATH + '/public')), '')
	}

	return {
		data: files,
		meta: {
			total: totalFiles,
		}
	}
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	res.status(200).json(getAllFiles())
}

type Data = {
	data: string[],
	meta: {
		total: number
	}
}
