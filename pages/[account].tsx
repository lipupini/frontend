import type { NextPage } from 'next'
import {useEffect, useState} from 'react'
import Head from 'next/head'
import getConfig from 'next/config'
import { useRouter } from 'next/router'
import { AppApiResponse, Breakpoint } from '../types'
import { translations as t } from '../i18n'
import Modal from '../components/Modal'
import SettingsForm from '../components/SettingsForm'
import { Settings } from '../types'

const Home: NextPage = () => {
	const router = useRouter()

	const { locale } = useRouter()
	if (!locale) {
		throw new Error('Could not determine locale')
	}

	const { account } = router.query

	const { publicRuntimeConfig } = getConfig()
	const [ settingsModalOpen, setSettingsModalOpen ] = useState<boolean>(false)
	const [ settings, setSettings ] = useState<Settings>({
		autoHeight: false,
		sort: 'filename',
		renderingMode: 'grid',
		columnBreakpoints: {
			small: 2,
			medium: 4,
			large: 6,
		},
	})
	const [ page, setPage ] = useState<number>(1)
	const [ media, setMedia ] = useState<AppApiResponse>({
		data: [],
		meta: {},
	})

	const detectBreakpoint = (): Breakpoint => {
		if (typeof window === 'undefined') {
			return 'small'
		}

		// Thanks to https://stackoverflow.com/a/65156200
		let breakpoint: Breakpoint = 'small'
		let biggestBreakpointWidth = 0

		Object.keys(publicRuntimeConfig.breakpoints ?? {}).forEach((themeBreakpoint: keyof typeof publicRuntimeConfig.breakpoints) => {
			for (let settingsBreakpoint of Object.keys(settings.columnBreakpoints)) {
				if (themeBreakpoint === settingsBreakpoint) {
					const breakpointWidth = parseInt(publicRuntimeConfig.breakpoints[themeBreakpoint])
					if (breakpointWidth > biggestBreakpointWidth) {
						biggestBreakpointWidth = breakpointWidth
					}
					if (
						window.innerWidth >= breakpointWidth &&
						window.innerWidth > biggestBreakpointWidth
					) {
						breakpoint = themeBreakpoint as keyof typeof settings.columnBreakpoints
					}
				}
			}
		})

		return breakpoint
	}

	const [ currentBreakpoint, setCurrentBreakpoint ] = useState<keyof typeof settings.columnBreakpoints>(detectBreakpoint())
	const [ columnCount, setColumnCount ] = useState<number>(settings.columnBreakpoints[detectBreakpoint()])

	useEffect(() => {
		const handleWindowResize = (event: UIEvent): void => {
			event.stopPropagation()
			const detectedBreakpoint: Breakpoint = detectBreakpoint()
			if (detectedBreakpoint === currentBreakpoint) {
				return
			}
			setCurrentBreakpoint(detectedBreakpoint)
		}

		setColumnCount(settings.columnBreakpoints[currentBreakpoint])

		window.addEventListener('resize', handleWindowResize)
		return () => {
			window.removeEventListener('resize', handleWindowResize)
		}
	}, [currentBreakpoint])

	useEffect(() => {
		const mediaContainer = document.querySelector('#media-container') as HTMLElement
		switch (settings.renderingMode) {
			case 'grid' :
				mediaContainer.classList.add('grid')
				mediaContainer.classList.remove('columns')
				mediaContainer.style.gridTemplateColumns = `repeat(${columnCount}, minmax(0, 1fr))`
				mediaContainer.style.columns = 'unset'
				break;
			case 'columns' :
				mediaContainer.classList.add('columns')
				mediaContainer.classList.remove('grid')
				mediaContainer.style.columns = columnCount.toString()
				mediaContainer.style.gridTemplateColumns = 'unset'
				break;

		}
	}, [settings.renderingMode, columnCount])

	useEffect(() => {
		if (settings.autoHeight) {
			document.querySelector('#modal-container')?.classList.add('autoHeight')
			document.querySelector('#modal-container')?.classList.remove('square')
		} else {
			document.querySelector('#modal-container')?.classList.add('square')
			document.querySelector('#modal-container')?.classList.remove('autoHeight')
		}
	}, [settings.autoHeight])

	useEffect(() => {
		if (!account) {
			return
		}

		fetch('/api/files?account=' + account + '&page=' + page + '&sort=' + settings.sort, {
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
	}, [account, page, settings.sort])

	const imageMarkup = {
		autoHeight: ((filename: string) => (
			<a href={filename} target="_blank" rel="noopener noreferrer">
				<img src={`/api/thumbnail?image=${filename}`} alt={filename} title={filename} loading="lazy" />
			</a>
		)),
		squareBackground: ((filename: string) => (
			<a href={filename} target="_blank" rel="noopener noreferrer">
				<div style={{backgroundImage: 'url("/api/thumbnail?image=' + filename + '")'}}>
					<img src="/image/1x1.png" alt={filename} title={filename} loading="lazy" />
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
				<div id="app-bar">
					<div>
						<button onClick={() => setSettingsModalOpen(true)} title={t[locale].settings}>
							⚙
						</button>
					</div>
					{(media.meta.hasPrevious || media.meta.hasNext) &&
						<div className="previous">
							<button onClick={() => setPage(prevState => prevState - 1)} disabled={!media.meta.hasPrevious} title={t[locale].previous}>
								←
							</button>
						</div>
					}
					<div className="index">
						<button onClick={() => router.push('/')} title={t[locale].index}>
							↑
						</button>
					</div>
					{(media.meta.hasPrevious || media.meta.hasNext) &&
						<div className="next">
							<button onClick={() => setPage(prevState => prevState + 1)} disabled={!media.meta.hasNext} title={t[locale].next}>
								→
							</button>
						</div>
					}
					<div className="about">
						<button onClick={() => window.open('https://github.com/instalution/frontend')} title={t[locale].about}>
							?
						</button>
					</div>
				</div>
				<div id="media-container" className={`${settings.renderingMode} ${settings.autoHeight ? 'autoHeight' : 'square'}`}>
					{media && media.data.map((filename: string) => (
						<div key={filename}>
							{/\.(jpg|webp)$/.test(filename) ?
								settings.autoHeight ?
									imageMarkup.autoHeight(filename) : imageMarkup.squareBackground(filename)
								: (
									<video controls preload="metadata" loop>
										<source src={`${filename}#t=0.5`} type="video/mp4" />
									</video>
								)}
						</div>
					))}
				</div>
			</main>
			<Modal openState={[ settingsModalOpen, setSettingsModalOpen ]}>
				<SettingsForm settingsState={[ settings, setSettings ]} />
			</Modal>
		</div>
	)
}

export default Home
