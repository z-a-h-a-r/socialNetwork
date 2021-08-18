// ====================================================
// IMPORTS
// Main
import axios from 'axios'

// ====================================================
// Instance

const instance = axios.create({
	withCredentials: true,
	headers: {
		'API-KEY': '71572937-80ec-4dde-adb1-d4b106a7cc21',
	},
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})

// ====================================================
// Requests

type getProfileDataResponseType = {
	userId: number | null
	aboutMe: string
	lookingForAJob: boolean | null
	lookingForAJobDescription: string | null
	fullName: string
	contacts: {
		github: string | null
		vk: string | null
		facebook: string | null
		instagram: string | null
		twitter: string | null
		website: string | null
		youtube: string | null
		mainLink: string | null
	}
	photos: {
		large: string | null
		small: string | null
	}
}
type updateStatusResponseType = {
	data: {}
	messages: Array<string>
	resultCode: number
}
type updateAvatarResponseType = {
	data: {}
	messages: Array<string>
	resultCode: number
}

export const profileAPI = {
	getProfileDataAPI: (userId: number) => {
		return instance
			.get<getProfileDataResponseType>(`profile/${userId}`)
			.then(response => response.data)
	},
	getStatusAPI: (id: number) => {
		return instance.get(`profile/status/${id}`).then(response => response.data)
	},
	updateStatusAPI: (status: string) => {
		return instance
			.put<updateStatusResponseType>(`profile/status`, { status })
			.then(response => response.data)
	},
	saveAvatarAPI: (file: any) => {
		let formData = new FormData()
		formData.append('image', file)
		return instance
			.put<updateAvatarResponseType>(`profile/photo`, formData)
			.then(response => response.data)
	},
}
