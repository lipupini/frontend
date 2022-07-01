import type { NextApiRequest, NextApiResponse } from 'next'
import useConfig from 'next/config'
import { Data } from '../../types'

const glob = require('glob')
const fs = require('fs')

const escapeRegExp = (string: string) => {
	return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

export default function Handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const {serverRuntimeConfig} = useConfig()
	const query = req.query;
	const { account } = query;

	const publicFolder = serverRuntimeConfig.baseDir + '/public'
	const filesFolder = publicFolder + '/accounts/' + account

	if (!fs.existsSync(filesFolder)) {
		return
	}

	const files = glob.sync(filesFolder + '/media/posts/**/*', { nodir: true})
	const totalFiles = files.length

	for (let i = 0; i < totalFiles; i++) {
		files[i] = files[i].replace(
			new RegExp('^' + escapeRegExp(publicFolder)), '')
	}

	res.status(200).json({
		data: files,
		meta: {
			total: totalFiles,
		}
	})
}
