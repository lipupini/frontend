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

	const autoHeight = false

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
		square: ((filename: string) => (
			<a href={filename} target="_blank" rel="noopener noreferrer">
				<div style={{backgroundImage: 'url("' + filename + '")'}}
				     className="bg-no-repeat bg-center bg-cover w-full aspect-square"/>
			</a>
		))
	}

	return (
		<div>
			<Head>
				<title>{publicRuntimeConfig.platformTitle}</title>
			</Head>

			<main>
				<div className="columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-0">
					{media && media.data.map((filename: string) => (
						<div key={filename} className="">
							{/\.(jpg|webp)$/.test(filename) ?
								autoHeight ?
									imageMarkup.autoHeight(filename) : imageMarkup.square(filename)
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
