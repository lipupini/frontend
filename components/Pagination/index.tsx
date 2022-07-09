import { translations as t } from '../../i18n'
import { PaginationProps } from '../../types'
import { useRouter } from 'next/router'

const Pagination = ({ meta, pageState, locale, location }: PaginationProps) => {
	const { setPage } = pageState
	const router = useRouter()

	return <>
		{(meta.hasPrevious || meta.hasNext) &&
			<div className="previous">
				<button onClick={() => setPage(prevState => prevState - 1)} disabled={!meta.hasPrevious} title={t[locale].previous}>
					←
				</button>
			</div>
		}
		<div className="index">
			<button onClick={() => router.push('/')} title={t[locale].index}>
				{ location === 'header' && '↑' }
			</button>
		</div>
		{(meta.hasPrevious || meta.hasNext) &&
			<div className="next">
				<button onClick={() => setPage(prevState => prevState + 1)} disabled={!meta.hasNext} title={t[locale].next}>
					→
				</button>
			</div>
		}
	</>
}

export default Pagination
