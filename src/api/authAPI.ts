// ====================================================
// IMPORTS
// Main
import { instance, ResponseType } from './api'

// ====================================================
// Requests

type TryLoginDataType = {
	id: number
	email: string
	login: string
}
type LoginDataType = {
	userId: number
}

export const authAPI = {
	tryLoginAPI: () => {
		return instance
			.get<ResponseType<TryLoginDataType>>(`auth/me`)
			.then(response => response.data)
	},
	loginAPI: (
		email: string,
		password: string,
		rememberMe: boolean = true,
		captcha: string | null = null
	) => {
		return instance
			.post<ResponseType<LoginDataType>>(`auth/login`, {
				email,
				password,
				rememberMe,
				captcha,
			})
			.then(response => response.data)
	},
	logoutAPI: () => {
		return instance
			.delete<ResponseType>(`auth/login`)
			.then(response => response.data)
	},
}
