import type { NextPage } from 'next'
import Head from 'next/head'
import getConfig from 'next/config'
import { useEffect, useState } from 'react'
import { ApiResponse } from '../types'

const Home: NextPage = () => {
	const [ accounts, setAccounts ] = useState<ApiResponse>({
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
				<title>{publicRuntimeConfig.platformTitle}</title>
			</Head>

			<main>
				<ul className="p-10">
					{accounts ? accounts.data.map((account: string) => (
						<li key={account}><a href={'/' + account}>{account}</a></li>
					)) : <li>No accounts loaded</li>}
				</ul>
			</main>
		</div>
	)
}

export default Home
