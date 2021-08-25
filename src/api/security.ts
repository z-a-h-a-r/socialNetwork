// ====================================================
// IMPORTS
// Main
import { instance } from './api'

// ====================================================
// Requests

type GetCaptchaResponseType = {
	url: string
}

export const securityAPI = {
	getCaptchaAPI: () => {
		return instance
			.get<GetCaptchaResponseType>(`security/get-captcha-url`)
			.then(response => response.data)
	},
}
