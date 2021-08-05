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

export const getUsersAPI = i => {
	return instance.get(`users?page=${i}`).then(response => response.data)
}
export const tryLoginAPI = () => {
	return instance.get(`auth/me`).then(response => response.data)
}
export const getProfileDataAPI = userId => {
	return instance.get(`profile/${userId}`).then(response => response.data)
}
export const unfollowAPI = id => {
	return instance.delete(`follow/${id}`).then(response => response.data)
}
export const followAPI = id => {
	return instance.post(`follow/${id}`).then(response => response.data)
}
export const getStatusAPI = id => {
	return instance.get(`profile/status/${id}`).then(response => response.data)
}
export const updateStatusAPI = status => {
	return instance
		.put(`profile/status`, { status })
		.then(response => response.data)
}
