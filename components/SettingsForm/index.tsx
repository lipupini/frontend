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
		<div className="mb-4">
			<label className="block font-bold mb-1">{t[locale].sort}</label>
			<select
				value={settings.sort}
				onChange={(event) => {
					setSettings(prevState => ({
						...prevState,
						sort: event.target.value
					}))
				}}
				className="border p-1 max-w-[225px]"
			>
				<option value="random">{t[locale].random}</option>
				<option value="filename">{t[locale].filename}</option>
			</select>
		</div>
		<div className="mb-4">
			<label className="block font-bold mb-1">{t[locale].layoutMode}</label>
			<select
				value={settings.autoHeight ? 'autoHeight' : 'square'}
				onChange={(event) => {
					setSettings(prevState => ({
						...prevState,
						autoHeight: event.target.value === 'autoHeight'
					}))
				}}
				className="border p-1"
			>
				<option value="square">{t[locale].square}</option>
				<option value="autoHeight">{t[locale].autoHeight}</option>
			</select>
		</div>
		{/*<div>
			<label className="block font-bold mb-1">{t[locale].language}</label>
			{publicRuntimeConfig.locales.map((locale: string) =>
				<Link href={window.location.href} locale={locale}>
					<a className="mr-2">{locale}</a>
				</Link>
			)}
		</div>*/}
	</>
}

export default SettingsForm
