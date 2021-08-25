// ====================================================
// IMPORTS
// Main
import { authAPI } from '../api/authAPI'
import { stopSubmit } from 'redux-form'
import { securityAPI } from '../api/security'
import { ThunkAction } from 'redux-thunk'
import { AppStateType, BaseThunkType, GetActionsTypes } from './store'

// ====================================================
// Types
const typeSetAuthUserData = 'SN/AUTH/SET-AUTH-USER-DATA'
const typeGetCaptchaSucess = 'SN/AUTH/GET-CAPTCHA-SUCESS'

// ====================================================
// Initial state

let initialState = {
	id: null as number | null,
	email: null as string | null,
	login: null as string | null,
	isAuth: false as boolean | null,
	captchaUrl: null as string | null,
}

type InitialStateType = typeof initialState

// ====================================================
// Reducer

const authReducer = (
	state = initialState,
	action: ActionsTypes
): InitialStateType => {
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

type ActionsTypes = GetActionsTypes<typeof authActions>

export const authActions = {
	setAuthUserData: (
		id: number | null,
		email: string | null,
		login: string | null,
		isAuth: boolean | null
	) =>
		({
			type: typeSetAuthUserData,
			data: { id, email, login, isAuth },
		} as const),
	getCaptchaSucess: (url: string) =>
		({
			type: typeGetCaptchaSucess,
			url,
		} as const),
}

// ====================================================
// Thunks

type ThunkType = BaseThunkType<ActionsTypes>

export const tryLogin = (): ThunkType => {
	return async dispatch => {
		authAPI.tryLoginAPI().then(data => {
			if (data.resultCode === 0) {
				let { id, email, login } = data.data
				dispatch(authActions.setAuthUserData(id, email, login, true))
			}
		})
	}
}
export const login = (
	email: string,
	password: string,
	rememberMe: boolean,
	captcha: string
): ThunkType => {
	return async dispatch => {
		authAPI.loginAPI(email, password, rememberMe, captcha).then((data: any) => {
			if (data.resultCode === 0) {
				debugger
				dispatch(tryLogin())
			} else {
				if (data.resultCode === 10) {
					debugger

					dispatch(getCaptcha())
				}
				dispatch(
					// @ts-ignore
					stopSubmit('login', {
						_error: data.messages ? data.messages : 'some error',
					})
				)
			}
		})
	}
}
export const logout = (): ThunkType => {
	return async dispatch => {
		authAPI.logoutAPI().then(data => {
			if (data.resultCode === 0) {
				dispatch(authActions.setAuthUserData(null, null, null, false))
			}
		})
	}
}
export const getCaptcha = (): ThunkType => {
	return async dispatch => {
		securityAPI.getCaptchaAPI().then(data => {
			dispatch(authActions.getCaptchaSucess(data.url))
		})
	}
}

// ====================================================
// Exports

export default authReducer
