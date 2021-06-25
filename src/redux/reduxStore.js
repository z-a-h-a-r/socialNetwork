// imports
import { combineReducers, createStore } from 'redux'
import messangerReducer from './messangerReducer'
import profileReducer from './profileReducer'
import usersReducer from './usersReducer'

// ====================================================

let reducers = combineReducers({
	messangerPage: messangerReducer,
	profilePage: profileReducer,
	userPage: usersReducer,
})

let store = createStore(reducers)

// ====================================================
// exports

export default store
