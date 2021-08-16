// ====================================================
// IMPORTS
// Main
import { authAPI } from '../api/authAPI'
import { stopSubmit } from 'redux-form'
import { securityAPI } from '../api/security'

// ====================================================
// Types
const typeSetAuthUserData = 'SET-AUTH-USER-DATA'
const typeGetCaptchaSucess = 'GET-CAPTCHA-SUCESS'

// ====================================================
// Initial state

let initialState = {
	id: null as number | null,
	email: null as string | null,
	login: null as string | null,
	isAuth: false as boolean,
	captchaUrl: null as string | null,
}

export type InitialStateType = typeof initialState
// ====================================================
// Reducer

const authReducer = (state = initialState, action: any): InitialStateType => {
	switch (action.type) {
		case typeSetAuthUserData:
			return {
				...state,
				...action.data,
			}

		case typeGetCaptchaSucess:
			return {
				...state,
				captchaUrl: action.url,
			}

		default:
			return state
	}
}

// ====================================================
// Action creators

type setAuthUserDataTypeData = {
	id: number | null
	email: string | null
	login: string | null
	isAuth: boolean | null
}
type setAuthUserDataType = {
	type: typeof typeSetAuthUserData
	data: setAuthUserDataTypeData
}
export const setAuthUserData = (
	id: number | null,
	email: string | null,
	login: string | null,
	isAuth: boolean | null
): setAuthUserDataType => ({
	type: typeSetAuthUserData,
	data: { id, email, login, isAuth },
})

// =====================

type getCaptchaSucessType = {
	type: typeof typeGetCaptchaSucess
	url: string
}
export const getCaptchaSucess = (url: string): getCaptchaSucessType => ({
	type: typeGetCaptchaSucess,
	url,
})

// ====================================================
// Thunks

export const tryLogin = () => (dispatch: any) => {
	authAPI.tryLoginAPI().then(data => {
		if (data.resultCode === 0) {
			let { id, email, login } = data.data
			dispatch(setAuthUserData(id, email, login, true))
		}
	})
}
export const login =
	(email: string, password: string, rememberMe: boolean, captcha: string) =>
	(dispatch: any) => {
		authAPI.loginAPI(email, password, rememberMe, captcha).then(data => {
			if (data.resultCode === 0) {
				debugger
				dispatch(tryLogin())
			} else {
				if (data.resultCode === 10) {
					debugger

					dispatch(getCaptcha())
				}
				dispatch(
					stopSubmit('login', {
						_error: data.messages ? data.messages : 'some error',
					})
				)
			}
		})
	}
export const logout = () => (dispatch: any) => {
	authAPI.logoutAPI().then(data => {
		if (data.resultCode === 0) {
			dispatch(setAuthUserData(null, null, null, false))
		}
	})
}
export const getCaptcha = () => (dispatch: any) => {
	securityAPI.getCaptchaAPI().then(data => {
		dispatch(getCaptchaSucess(data.url))
	})
}

// ====================================================
// Exports

export default authReducer
