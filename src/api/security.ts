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

type getCaptchaResponseType = {
	url: string
}

export const securityAPI = {
	getCaptchaAPI: () => {
		return instance
			.get<getCaptchaResponseType>(`security/get-captcha-url`)
			.then(response => response.data)
	},
}
