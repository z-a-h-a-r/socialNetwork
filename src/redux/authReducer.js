// ====================================================
// IMPORTS
// Main
import { authAPI } from '../api/authAPI'
import { stopSubmit } from 'redux-form'

// ====================================================
// Types
const typeSetAuthUserData = 'SET-AUTH-USER-DATA'

// ====================================================
// Initial state

let initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
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
export const tryLogin = () => dispatch => {
	authAPI.tryLoginAPI().then(data => {
		if (data.resultCode === 0) {
			let { id, email, login } = data.data
			dispatch(setAuthUserData(id, email, login, true))
		}
	})
}

export const login = (email, password, rememberMe) => dispatch => {
	authAPI.loginAPI(email, password, rememberMe).then(data => {
		if (data.resultCode === 0) {
			debugger
			dispatch(tryLogin())
		} else {
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
// ====================================================
// Exports

export default authReducer
