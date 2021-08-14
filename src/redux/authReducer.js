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
	id: null,
	email: null,
	login: null,
	isAuth: false,
	captchaUrl: null,
}

// ====================================================
// Reducer

const authReducer = (state = initialState, action) => {
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

export const setAuthUserData = (id, email, login, isAuth) => ({
	type: typeSetAuthUserData,
	data: { id, email, login, isAuth },
})
export const getCaptchaSucess = url => ({
	type: typeGetCaptchaSucess,
	url,
})

// ====================================================
// Thunks

export const tryLogin = () => dispatch => {
	authAPI.tryLoginAPI().then(data => {
		if (data.resultCode === 0) {
			let { id, email, login } = data.data
			dispatch(setAuthUserData(id, email, login, true))
		}
	})
}
export const login = (email, password, rememberMe, captcha) => dispatch => {
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
export const logout = () => dispatch => {
	authAPI.logoutAPI().then(data => {
		if (data.resultCode === 0) {
			dispatch(setAuthUserData(null, null, null, false))
		}
	})
}
export const getCaptcha = () => dispatch => {
	securityAPI.getCaptchaAPI().then(data => {
		dispatch(getCaptchaSucess(data.url))
	})
}

// ====================================================
// Exports

export default authReducer
