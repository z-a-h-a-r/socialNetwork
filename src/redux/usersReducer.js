// ====================================================
// IMPORTS
// Main
import { getUsersAPI, unfollowAPI } from '../api/api'

// ====================================================
// Types

const typeFollow = 'FOLLOW'
const typeUnFollow = 'UNFOLLOW'
const typeSetUsers = 'SET-USERS'
const typeSetUsersIsFetching = 'SET-USERS-IS-FETCHING'
const typeSetFollowingIsFetching = 'SET-FOLLOWING-IS-FETCHING'

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
		case typeFollow:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.id) {
						return { ...user, followed: true }
					} else {
						return user
					}
				}),
			}

		case typeUnFollow:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.id) {
						return { ...user, followed: false }
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

export const followSuccess = id => ({ type: typeFollow, id })
export const unFollowSuccess = id => ({ type: typeUnFollow, id })
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
export const getUsers = i => dispatch => {
	dispatch(setUsersIsFetching(true))
	getUsersAPI(i).then(data => {
		dispatch(setUsersIsFetching(false))
		dispatch(setUsers(data.items))
	})
}
export const unFollow = userId => dispatch => {
	dispatch(setFollowingIsFetching(true, userId))
	unfollowAPI(userId).then(data => {
		dispatch(unFollowSuccess(userId))
		dispatch(setFollowingIsFetching(false, userId))
	})
}
export const follow = userId => dispatch => {
	dispatch(setFollowingIsFetching(true, userId))
	unfollowAPI(userId).then(data => {
		dispatch(followSuccess(userId))
		dispatch(setFollowingIsFetching(false, userId))
	})
}
// ====================================================
// Exports

export default usersReducer
