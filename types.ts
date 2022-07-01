export interface ApiResponse {
	data: []
	meta: {}
}

export type Data = {
	data: string[],
	meta: {
		total: number
	}
}
