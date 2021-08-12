// ====================================================
// IMPORTS
// Main
import { tryLogin } from './authReducer'

// ====================================================
// Types
const typeSetInitialize = 'SET-INITIALIZE'

// ====================================================
// Initial state

let initialState = {
	initialized: false,
}

// ====================================================
// Reducer

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case typeSetInitialize:
			return {
				...state,
				initialized: action.boolean,
			}

		default:
			return state
	}
}

// ====================================================
// Action creators

export const setInitialize = boolean => ({
	type: typeSetInitialize,
	boolean,
})

export const initialize = () => dispatch => {
	let promise = dispatch(tryLogin())
	Promise.all([promise]).then(() => {
		console.log('promise')
		dispatch(setInitialize(true))
	})
}
// ====================================================
// Exports

export default appReducer
