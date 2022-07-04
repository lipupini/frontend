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
	const [page, setPage] = useState<number>(1)
	const [media, setMedia] = useState<AppApiResponse>({
		data: [],
		meta: {},
	})

	const [ autoHeight, setAutoHeight ] = useState<boolean>(false)

	useEffect(() => {
		if (!account) {
			return
		}

		fetch('/api/files?account=' + account + '&page=' + page, {
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
	}, [account, page])

	const imageMarkup = {
		autoHeight: ((filename: string) => (
			<a href={filename} target="_blank" rel="noopener noreferrer">
				<img src={`/api/thumbnail?image=${filename}`} alt="" className="w-full" loading="lazy" />
			</a>
		)),
		squareBackground: ((filename: string) => (
			<a href={filename} target="_blank" rel="noopener noreferrer">
				<div style={{backgroundImage: 'url("/api/thumbnail?image=' + filename + '")'}} className="bg-no-repeat bg-center bg-cover">
					<img src="/image/1x1.png" alt="" className="w-full aspect-square" loading="lazy"/>
				</div>
			</a>
		)),
		squareOverflowHidden: ((filename: string) => (
			<a href={filename} target="_blank" rel="noopener noreferrer">
				<div className="w-full aspect-square overflow-hidden flex justify-center">
					<img src={`/api/thumbnail?image=${filename}`} alt="" className="h-full" loading="lazy" />
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
					<div className="grow-0">
						<button onClick={() => setAutoHeight(prevState => !prevState)}>
							{autoHeight ? '🌐' : '⬜'}
						</button>
					</div>
					<div className="grow text-center">
						<button onClick={() => setPage(prevState => prevState - 1)} disabled={!media.meta.hasPrev}>
							←
						</button>
					</div>
					<div className="grow text-center">
						<button onClick={() => setPage(prevState => prevState + 1)} disabled={!media.meta.hasNext}>
							→
						</button>
					</div>
					<div className="grow-0">
						<a href="https://github.com/groovenectar/instalution" target="_blank" rel="noreferrer noopener">
							?
						</a>
					</div>
				</div>
				<div className="columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-0">
					{media && media.data.map((filename: string) => (
						<div key={filename} className="">
							{/\.(jpg|webp)$/.test(filename) ?
								autoHeight ?
									imageMarkup.autoHeight(filename) : imageMarkup.squareBackground(filename)
								: (
									<video controls className="w-full aspect-square" preload="metadata" loop>
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
