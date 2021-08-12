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

export const authAPI = {
	tryLoginAPI: () => {
		return instance.get(`auth/me`).then(response => response.data)
	},
	loginAPI: (email, password, rememberMe = true) => {
		return instance
			.post(`auth/login`, { email, password, rememberMe })
			.then(response => response.data)
	},
	logoutAPI: () => {
		return instance.delete(`auth/login`).then(response => response.data)
	},
}
