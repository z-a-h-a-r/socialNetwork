// ====================================================
// IMPORTS
// Main
import { tryLogin } from './authReducer'

// ====================================================
// Types
const typeSetInitialize = 'SET-INITIALIZE'

// ====================================================
// Initial state

export type InitialStateType = {
	initialized: boolean
}
let initialState: InitialStateType = {
	initialized: false,
}

// ====================================================
// Reducer

const appReducer = (state = initialState, action: any): InitialStateType => {
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

type setInitializeType = {
	type: typeof typeSetInitialize
	boolean: boolean
}
export const setInitialize = (boolean: boolean): setInitializeType => ({
	type: typeSetInitialize,
	boolean,
})

export const initialize = () => (dispatch: any) => {
	let promise = dispatch(tryLogin())
	Promise.all([promise]).then(() => {
		dispatch(setInitialize(true))
	})
}
// ====================================================
// Exports

export default appReducer
