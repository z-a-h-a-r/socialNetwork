// imports
import { combineReducers, createStore } from 'redux'
import messangerReducer from './messangerReducer'
import profileReducer from './profileReducer'

// ====================================================

let reducers = combineReducers({
	messangerPage: messangerReducer,
	profilePage: profileReducer,
})

let store = createStore(reducers)

// ====================================================
// exports

export default store
