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
		<div className="grid grid-cols-2">
			<label>{t[locale].layoutMode}</label>
			<select
				value={settings.autoHeight ? 'autoHeight' : 'square'}
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
