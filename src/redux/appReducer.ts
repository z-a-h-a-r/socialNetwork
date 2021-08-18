// ====================================================
// IMPORTS
// Main
import { ThunkAction } from 'redux-thunk'
import { tryLogin } from './authReducer'
import { AppStateType } from './store'

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

type ActionsTypes = setInitializeType

const appReducer = (
	state = initialState,
	action: ActionsTypes
): InitialStateType => {
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

// ====================================================
// Thunks

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const initialize = (): ThunkType => {
	return async dispatch => {
		let promise = dispatch(tryLogin())
		Promise.all([promise]).then(() => {
			dispatch(setInitialize(true))
		})
	}
}
// ====================================================
// Exports

export default appReducer
