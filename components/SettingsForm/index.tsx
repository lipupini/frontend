import { translations as t } from '../../i18n'
import { useRouter } from 'next/router'
import { SettingsFormProps } from '../../types'

export const SettingsForm = ({settingsState}: SettingsFormProps) => {
	const { locale } = useRouter()
	const [ settings, setSettings ] = settingsState

	if (!locale) {
		throw new Error('Could not determine locale')
	}

	return <div>
		<h1 className="text-2xl font-bold mb-5">Settings</h1>

		<div className="grid grid-cols-2">
			<label className="mb-5">{t[locale].layoutMode}</label>
			<select
				className="mb-5" value={settings.autoHeight ? 'autoHeight' : 'square'}
				onChange={(event) => {
					setSettings(prevState => ({
						...prevState,
						autoHeight: event.target.value === 'autoHeight'
					}))
				}}>
				<option value="square">Square</option>
				<option value="autoHeight">Auto-Height</option>
			</select>
		</div>
	</div>
}

export default SettingsForm
