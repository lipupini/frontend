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
