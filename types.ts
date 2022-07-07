import { Dispatch, SetStateAction } from 'react'

export interface AppApiResponse {
	data: []
	meta: {
		total?: number
		hasPrevious?: boolean
		hasNext?: boolean
	}
}

export interface AppLocaleTranslation {
	[index: string]: { [index: string]: string }
}

export interface ModalProps {
	openState: [
		boolean,
		Dispatch<SetStateAction<boolean>>
	]
	children: JSX.Element
}

export interface Settings {
	autoHeight: boolean
	sort: string
}

export interface SettingsFormProps {
	settingsState: [
		Settings,
		Dispatch<SetStateAction<Settings>>
	]
}
