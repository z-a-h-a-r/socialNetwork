// ====================================================
// IMPORTS
// Main
import { tryLogin } from './authReducer'
import { BaseThunkType, GetActionsTypes } from './store'

// ====================================================
// Types
const typeSetInitialize = 'SN/APP/SET-INITIALIZE'

// ====================================================
// Initial state

let initialState = {
	initialized: false as boolean,
}
type InitialStateType = typeof initialState

// ====================================================
// Reducer

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

type ActionsTypes = GetActionsTypes<typeof appActions>

export const appActions = {
	setInitialize: (boolean: boolean) =>
		({
			type: typeSetInitialize,
			boolean,
		} as const),
}

// ====================================================
// Thunks

type ThunkType = BaseThunkType<ActionsTypes>

export const initialize = (): ThunkType => {
	return async dispatch => {
		let promise = dispatch(tryLogin())
		Promise.all([promise]).then(() => {
			dispatch(appActions.setInitialize(true))
		})
	}
}
// ====================================================
// Exports

export default appReducer
