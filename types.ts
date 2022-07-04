export interface AppApiResponse {
	data: []
	meta: {
		total?: number
		hasPrev?: boolean
		hasNext?: boolean
	}
}

export interface AppLocaleTranslation {
	[index: string]: { [index: string]: string }
}
