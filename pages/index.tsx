import type { NextPage } from 'next'
import Head from 'next/head'
import getConfig from 'next/config'
import { useEffect, useState } from 'react'
import { AppApiResponse } from '../types'
import Link from 'next/link'

const Home: NextPage = () => {
	const [ accounts, setAccounts ] = useState<AppApiResponse>({
		data: [],
		meta: {},
	})

	const { publicRuntimeConfig } = getConfig()

	useEffect(() => {
		fetch('/api/accounts', {
			method: 'GET',
			headers: { 'Content-type': 'application/json' },
		})
			.then(response => response.json())
			.then(
				(response) => {
					setAccounts(response)
				},
				(error) => {
					console.log(error)
				}
			);
	}, [])

	return (
		<div>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>{publicRuntimeConfig.platformTitle}</title>
			</Head>

			<main>
				<ul>
					{accounts ? accounts.data.map((account: string) => (
						<li key={account}><Link href={'/' + account}>{account}</Link></li>
					)) : <li>No accounts loaded</li>}
				</ul>
			</main>
		</div>
	)
}

export default Home
