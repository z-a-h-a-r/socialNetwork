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

// ====================================================
// Exports

export default authReducer
