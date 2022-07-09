import { translations as t } from '../../i18n'
import { useRouter } from 'next/router'
import { SettingsFormProps } from '../../types'
import getConfig from 'next/config'
import Link from 'next/link'

export const SettingsForm = ({settingsState}: SettingsFormProps) => {
	const { locale } = useRouter()
	const [ settings, setSettings ] = settingsState
	const { publicRuntimeConfig } = getConfig()
	const router = useRouter()

	if (!locale) {
		throw new Error('Could not determine locale')
	}

	return <>
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
		{/*<div>
			<label>{t[locale].language}</label>
			{publicRuntimeConfig.locales.map((locale: string) =>
				<Link href={window.location.href} locale={locale}>
					<a>{locale}</a>
				</Link>
			)}
		</div>*/}
	</>
}

export default SettingsForm
