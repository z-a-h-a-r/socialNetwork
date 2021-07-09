const typeSetAuthUserData = 'SET-AUTH-USER-DATA'

// ====================================================

let initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
}

// ====================================================

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

export const setAuthUserData = (id, email, login) => ({
	type: typeSetAuthUserData,
	data: { id, email, login },
})

// ====================================================

export default authReducer
