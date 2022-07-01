import type { NextPage } from 'next'
import {useEffect, useState} from 'react'
import Head from 'next/head'
import getConfig from 'next/config'
import { useRouter } from 'next/router'
import { AppApiResponse } from '../types'

const Home: NextPage = () => {
	const router = useRouter()
	const { account } = router.query

	const {publicRuntimeConfig} = getConfig()
	const [media, setMedia] = useState<AppApiResponse>({
		data: [],
		meta: {},
	})

	const [ autoHeight, setAutoHeight ] = useState<boolean>(false)

	useEffect(() => {
		fetch('/api/files?account=' + account, {
			method: 'GET',
			headers: { 'Content-type': 'application/json' },
		})
			.then(response => response.json())
			.then(
				(response) => {
					setMedia(response)
				},
				(error) => {
					console.log(error)
				}
			);
	}, [account])

	const imageMarkup = {
		autoHeight: ((filename: string) => (
			<a href={filename} target="_blank" rel="noopener noreferrer">
				<img src={filename} alt="" className="w-full" loading="lazy"/>
			</a>
		)),
		squareBackground: ((filename: string) => (
			<a href={filename} target="_blank" rel="noopener noreferrer">
				<div style={{backgroundImage: 'url("' + filename + '")'}} className="bg-no-repeat bg-center bg-cover">
					<img src="/image/1x1.png" alt="" className="w-full aspect-square" loading="lazy"/>
				</div>
			</a>
		)),
		squareOverflowHidden: ((filename: string) => (
			<a href={filename} target="_blank" rel="noopener noreferrer">
				<div className="w-full aspect-square overflow-hidden flex justify-center">
					<img src={filename} alt="" className="h-full" loading="lazy"/>
				</div>
			</a>
		)),
	}

	return (
		<div>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>{publicRuntimeConfig.platformTitle}</title>
			</Head>

			<main>
				<div className="p-10 flex">
					<button onClick={() => setAutoHeight(prevState => !prevState)}>
						Display Style: {autoHeight ? 'Auto Height' : 'Square'}
					</button>
				</div>
				<div className="columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-0">
					{media && media.data.map((filename: string) => (
						<div key={filename} className="">
							{/\.(jpg|webp)$/.test(filename) ?
								autoHeight ?
									imageMarkup.autoHeight(filename) : imageMarkup.squareBackground(filename)
								: (
									<video controls className="w-full aspect-square" preload="metadata">
										<source src={`${filename}#t=0.5`} type="video/mp4" />
									</video>
								)}
						</div>
					))}
				</div>
			</main>
		</div>
	)
}

export default Home
