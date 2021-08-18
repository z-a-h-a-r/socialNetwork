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

type tryLoginResponseType = {
	data: {
		id: number
		email: string
		login: string
	}
	resultCode: number
	messages: Array<string>
}
type loginResponseType = {
	data: {
		userId: number
	}
	resultCode: number
	messages: Array<string>
}
type logoutResponseType = {
	data: {}
	messages: Array<string>
	resultCode: number
}

export const authAPI = {
	tryLoginAPI: () => {
		return instance
			.get<tryLoginResponseType>(`auth/me`)
			.then(response => response.data)
	},
	loginAPI: (
		email: string,
		password: string,
		rememberMe: boolean = true,
		captcha: string | null = null
	) => {
		return instance
			.post<loginResponseType>(`auth/login`, {
				email,
				password,
				rememberMe,
				captcha,
			})
			.then(response => response.data)
	},
	logoutAPI: () => {
		return instance
			.delete<logoutResponseType>(`auth/login`)
			.then(response => response.data)
	},
}
