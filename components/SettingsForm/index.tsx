import { translations as t } from '../../i18n'
import { useRouter } from 'next/router'
import { SettingsFormProps } from '../../types'
import getConfig from 'next/config'
import Link from 'next/link'
import { Breakpoint } from '../../types'

export const SettingsForm = ({settingsState, account, currentBreakpoint, setCurrentColumnCount}: SettingsFormProps) => {
	const { locale } = useRouter()
	const [ settings, setSettings ] = settingsState
	const { publicRuntimeConfig } = getConfig()

	if (!locale) {
		throw new Error('Could not determine locale')
	}

	const columnCountInput = (breakpoint: Breakpoint) => {
		if (breakpoint !== currentBreakpoint) {
			return <></>
		}

		return <input
			type="number" min="1"
			style={{width: '50px'}}
			value={settings.columnBreakpoints[breakpoint]}
			onChange={(event) => {
				setSettings(prevState => ({
					...prevState,
					columnBreakpoints: {
						...prevState.columnBreakpoints,
						[breakpoint]: event.target.value, // This should allow type `number`?
					},
				}))
				setCurrentColumnCount(event.target.value)
			}}
		/>
	}

	return <div id="settings-form">
		<div className="form-input-label">
			<label>{t[locale].sort}</label>
			<select
				value={settings.sort}
				onChange={(event) => {
					setSettings(prevState => ({
						...prevState,
						sort: event.target.value
					}))
				}}
			>
				<option value="random">{t[locale].random}</option>
				<option value="filename">{t[locale].filename}</option>
			</select>
		</div>
		<div className="form-input-label">
			<label>{t[locale].layoutMode}</label>
			<select
				value={settings.autoHeight ? 'autoHeight' : 'square'}
				onChange={(event) => {
					setSettings(prevState => ({
						...prevState,
						autoHeight: event.target.value === 'autoHeight'
					}))
				}}
			>
				<option value="square">{t[locale].square}</option>
				<option value="autoHeight">{t[locale].autoHeight}</option>
			</select>
		</div>
		<div className="form-input-label">
			<label>{t[locale].renderingMode}</label>
			<select
				value={settings.renderingMode}
				onChange={(event) => {
					setSettings(prevState => ({
						...prevState,
						renderingMode: event.target.value as typeof settings.renderingMode
					}))
				}}
			>
				<option value="grid">{t[locale].grid}</option>
				<option value="columns">{t[locale].column}</option>
			</select>
		</div>
		<div className="form-input-label">
			<label>{t[locale].columnCount}</label>
			{columnCountInput('small')}
			{columnCountInput('medium')}
			{columnCountInput('large')}
		</div>
		<div>
			<label>{t[locale].language}</label>
			<div className="input-grid input-grid-4 text-center gap">
				{publicRuntimeConfig.locales.map((locale: string) =>
					<Link href={`/${account}`} locale={locale} key={locale}>
						<a className="border">{locale}</a>
					</Link>
				)}
			</div>
		</div>
	</div>
}

export default SettingsForm
