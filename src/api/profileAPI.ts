// ====================================================
// IMPORTS
// Main
import { photosType, ProfileType } from '../types/types'
import { instance, ResponseType } from './api'

// ====================================================
// Requests

export const profileAPI = {
	getProfileDataAPI: (userId: number) => {
		return instance
			.get<ProfileType>(`profile/${userId}`)
			.then(response => response.data)
	},
	getStatusAPI: (id: number) => {
		return instance
			.get<string>(`profile/status/${id}`)
			.then(response => response.data)
	},
	updateStatusAPI: (status: string) => {
		return instance
			.put<ResponseType<photosType>>(`profile/status`, { status })
			.then(response => response.data)
	},
	saveAvatarAPI: (file: any) => {
		let formData = new FormData()
		formData.append('image', file)
		return instance
			.put<ResponseType>(`profile/photo`, formData)
			.then(response => response.data)
	},
}
