import { Dispatch, SetStateAction } from 'react'

export type Breakpoint = 'small' | 'medium' | 'large'

export interface AppApiResponseMeta {
	total: number
}

export interface AppApiResponse {
	data: []
	meta: AppApiResponseMeta
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
	columnBreakpoints: {[index in Breakpoint]: number}
	renderingMode: 'grid' | 'columns'
	perPage: number
}

export interface PageState {
	page: number
	setPage: Dispatch<SetStateAction<number>>
}

export interface SettingsFormProps {
	account: string
	settingsState: [
		Settings,
		Dispatch<SetStateAction<Settings>>
	]
	currentBreakpoint: Breakpoint
	setCurrentColumnCount: CallableFunction
}

export interface PaginationProps {
	meta: AppApiResponseMeta
	pageState: PageState
	locale: string
	location: 'header' | 'footer'
	settings: Settings
}
