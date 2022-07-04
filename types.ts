export interface AppApiResponse {
	data: []
	meta: {
		total?: number
		hasPrev?: boolean
		hasNext?: boolean
	}
}
