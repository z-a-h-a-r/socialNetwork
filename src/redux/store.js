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

// ====================================================
// CombineReducers

let reducers = combineReducers({
	messangerPage: messangerReducer,
	profilePage: profileReducer,
	userPage: usersReducer,
	auth: authReducer,
	form: formReducer,
})

// ====================================================
// Store

let store = createStore(
	reducers,
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
)

// ====================================================
// Exports

export default store
