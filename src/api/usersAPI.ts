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

type getUsersResponseType = {}
type toggleFollowResponseType = {
	data: {}
	messages: Array<string>
	resultCode: number
}

export const usersAPI = {
	getUsersAPI: (i: number) => {
		return instance.get(`users?page=${i}`).then(response => response.data)
	},
	toggleFollowAPI: (id: number, nextFollowState: boolean) => {
		if (nextFollowState) {
			return instance
				.post<toggleFollowResponseType>(`follow/${id}`)
				.then(response => response.data)
		} else {
			return instance
				.delete<toggleFollowResponseType>(`follow/${id}`)
				.then(response => response.data)
		}
	},
}
