import { translations as t } from '../../i18n'
import { PaginationProps } from '../../types'
import { useRouter } from 'next/router'

const Pagination = ({ meta, pageState, locale, location, settings }: PaginationProps) => {
	const { page, setPage } = pageState
	const router = useRouter()

	return <>
		{meta.total > settings.perPage &&
			<div className="previous">
				<button onClick={() => setPage(prevState => prevState - 1)} disabled={page === 1} title={t[locale].previous}>
					←
				</button>
			</div>
		}
		<div className="index">
			<button onClick={() => router.push('/')} title={t[locale].index}>
				{ location === 'header' && '↑' }
			</button>
		</div>
		{meta.total > settings.perPage &&
			<div className="next">
				<button onClick={() => setPage(prevState => prevState + 1)} disabled={page === Math.ceil(meta.total / settings.perPage)} title={t[locale].next}>
					→
				</button>
			</div>
		}
	</>
}

export default Pagination
