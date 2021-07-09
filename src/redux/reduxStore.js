// imports
import { combineReducers, createStore } from 'redux'
import authReducer from './authReducer'
import messangerReducer from './messangerReducer'
import profileReducer from './profileReducer'
import usersReducer from './usersReducer'

// ====================================================

let reducers = combineReducers({
	messangerPage: messangerReducer,
	profilePage: profileReducer,
	userPage: usersReducer,
	auth: authReducer,
})

let store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// ====================================================
// exports

export default store
