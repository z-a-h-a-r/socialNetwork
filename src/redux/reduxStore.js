// ====================================================
// Imports
// Main
import { combineReducers, createStore } from 'redux'
// Reducers
import authReducer from './authReducer'
import messangerReducer from './messangerReducer'
import profileReducer from './profileReducer'
import usersReducer from './usersReducer'

// ====================================================
// CombineReducers

let reducers = combineReducers({
	messangerPage: messangerReducer,
	profilePage: profileReducer,
	userPage: usersReducer,
	auth: authReducer,
})

// ====================================================
// Store

let store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// ====================================================
// Exports

export default store
