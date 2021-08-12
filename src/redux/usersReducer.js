// ====================================================
// IMPORTS
// Main
import { usersAPI } from '../api/usersAPI'

// ====================================================
// Types

const typeSetUsers = 'SET-USERS'
const typeSetUsersIsFetching = 'SET-USERS-IS-FETCHING'
const typeSetFollowingIsFetching = 'SET-FOLLOWING-IS-FETCHING'
const typeToggleFollowState = 'TOGGLE-FOLLOWING-STATE'

// ====================================================
// Initial state

let initialState = {
	users: [],
	usersIsFetching: false,
	followingIsFetching: [],
}

// ====================================================
// Reducer

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case typeToggleFollowState:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.id) {
						return { ...user, followed: action.nextFollowState }
					} else {
						return user
					}
				}),
			}

		case typeSetUsers:
			return {
				...state,
				users: [...state.users, ...action.users],
			}

		case typeSetUsersIsFetching:
			return {
				...state,
				isFetchingData: action.boolean,
			}

		case typeSetFollowingIsFetching:
			return {
				...state,
				typeSetFollowingIsFetching: action.followingIsFetching
					? [...state.followingIsFetching, action.id]
					: state.followingIsFetching.filter(id => id != action.id),
			}

		default:
			return state
	}
}

// ====================================================
// Action creators

export const toggleFollowStateSuccess = (id, nextFollowState) => ({
	type: typeToggleFollowState,
	id,
	nextFollowState,
})
export const setUsers = users => ({ type: typeSetUsers, users })
export const setUsersIsFetching = boolean => ({
	type: typeSetUsersIsFetching,
	boolean,
})
export const setFollowingIsFetching = (boolean, id) => ({
	type: typeSetFollowingIsFetching,
	boolean,
	id,
})

// ====================================================
// Thunks
export const getUsers = i => dispatch => {
	dispatch(setUsersIsFetching(true))
	usersAPI.getUsersAPI(i).then(data => {
		dispatch(setUsersIsFetching(false))
		dispatch(setUsers(data.items))
	})
}
export const toggleFollowState =
	(userId, nextFollowState) => async dispatch => {
		dispatch(setFollowingIsFetching(true, userId))

		let data = await usersAPI.toggleFollowAPI(userId, nextFollowState)

		if (data.resultCode === 0) {
			dispatch(toggleFollowStateSuccess(userId, nextFollowState))
			dispatch(setFollowingIsFetching(false, userId))
		}
	}

// ====================================================
// Exports

export default usersReducer
