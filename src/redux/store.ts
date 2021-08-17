// ====================================================
// Imports
// Main
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
// Reducers
import authReducer from './authReducer'
import messangerReducer from './messangerReducer'
import profileReducer from './profileReducer'
import usersReducer from './usersReducer'
import appReducer from './appReducer'

// ====================================================
// CombineReducers

let reducers = combineReducers({
	messangerPage: messangerReducer,
	profilePage: profileReducer,
	userPage: usersReducer,
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

type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>

// ====================================================
// Exports

export default store
