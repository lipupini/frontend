import type { NextApiRequest, NextApiResponse } from 'next'
import useConfig from 'next/config'
import { AppApiResponse } from '../../types'

const glob = require('glob')
const path = require('path')

export default function Handler(
	req: NextApiRequest,
	res: NextApiResponse<AppApiResponse>
) {
	const {serverRuntimeConfig} = useConfig()
	const publicFolder = serverRuntimeConfig.baseDir + '/public'
	const accounts = glob.sync(publicFolder + '/accounts/*')

	const totalAccounts = accounts.length

	for (let i = 0; i < totalAccounts; i++) {
		accounts[i] = path.basename(accounts[i])
	}

	res.status(200).json({
		data: accounts,
		meta: {
			total: totalAccounts,
		}
	})
}
