// ====================================================
// Imports
// Main
import {
	Action,
	applyMiddleware,
	combineReducers,
	compose,
	createStore,
} from 'redux'
import thunk, { ThunkAction } from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
// Reducers
import authReducer from './authReducer'
import messangerReducer from './messangerReducer'
import profileReducer from './profileReducer'
import usersReducer from './usersReducer'
import appReducer from './appReducer'
import friendsReducer from './friendsReducer'

// ====================================================
// CombineReducers

let reducers = combineReducers({
	messangerPage: messangerReducer,
	profilePage: profileReducer,
	userPage: usersReducer,
	friendsPage: friendsReducer,
	auth: authReducer,
	form: formReducer,
	app: appReducer,
})

// ====================================================
// Store

let store = createStore(
	reducers,
	compose(
		applyMiddleware(thunk),
		// @ts-ignore
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
)

// ====================================================
// Common types

type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>

// ===============

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never
export type GetActionsTypes<
	T extends { [key: string]: (...args: any[]) => any }
> = ReturnType<PropertiesType<T>>

// ===============

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<
	R,
	AppStateType,
	unknown,
	A
>

// ====================================================
// Exports

export default store
