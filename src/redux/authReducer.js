// ====================================================
// Types

import { tryLoginAPI } from '../api/api'

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
				isAuth: true,
			}

		default:
			return state
	}
}

// ====================================================
// Action creators

export const setAuthUserData = (id, email, login) => ({
	type: typeSetAuthUserData,
	data: { id, email, login },
})
export const tryLogin = () => dispatch => {
	tryLoginAPI().then(data => {
		if (data.resultCode === 0) {
			let { id, email, login } = data.data
			dispatch(setAuthUserData(id, email, login))
		}
	})
}
// ====================================================
// Exports

export default authReducer
