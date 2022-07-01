import type {NextPage} from 'next'
import {useEffect, useState} from 'react'
import Head from 'next/head'
import getConfig from 'next/config'

const Home: NextPage = () => {
	const {publicRuntimeConfig} = getConfig()
	const [media, setMedia] = useState<ApiResponse>({
		data: [],
		meta: {},
	})

	const [ autoHeight, setAutoHeight ] = useState<boolean>(false)

	useEffect(() => {
		fetch('/api/files', {
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
	}, [])

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
				<title>{publicRuntimeConfig.platformTitle}</title>
			</Head>

			<main>
				<div className="p-10 flex">
					<a href="#" onClick={() => setAutoHeight(prevState => !prevState)}>
						Display Style: {autoHeight ? 'Auto Height' : 'Square'}
					</a>
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

			<footer>

			</footer>
		</div>
	)
}

interface ApiResponse {
	data: []
	meta: {}
}

export default Home
