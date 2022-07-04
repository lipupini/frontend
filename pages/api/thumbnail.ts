import type { NextApiRequest, NextApiResponse } from 'next'
import useConfig from 'next/config'
import { AppApiResponse } from '../../types'

const sharp = require('sharp')
const fs = require('fs')

export default function Handler(
	req: NextApiRequest,
	res: NextApiResponse<AppApiResponse>
) {
	const {serverRuntimeConfig} = useConfig()
	const publicFolder = serverRuntimeConfig.baseDir + '/public'
	const query = req.query;
	const { image } = query;

	const fullImagePath = publicFolder + image

	if (!fs.existsSync(fullImagePath)) {
		return
	}

	sharp(fullImagePath)
		.resize({ width: 400 })
		.jpeg({
			quality: 89,
		})
		.toBuffer()
		.then((data: any) => {
			res.setHeader('Content-Type', 'image/jpg')
			res.send(data)
		});
}
