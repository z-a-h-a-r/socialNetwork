// ====================================================
// IMPORTS
// Main
import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { usersAPI } from '../api/usersAPI'
import { UserType } from '../types/types'
import { AppStateType } from './store'

// ====================================================
// Types

const typeSetUsers = 'SET-USERS'
const typeSetUsersIsFetching = 'SET-USERS-IS-FETCHING'
const typeSetFollowingIsFetching = 'SET-FOLLOWING-IS-FETCHING'
const typeToggleFollowState = 'TOGGLE-FOLLOWING-STATE'

// ====================================================
// Initial state

let initialState = {
	users: [] as Array<UserType>,
	usersIsFetching: false as boolean,
	followingIsFetching: [] as Array<number>, // array of user id
	isFetchingData: false as boolean,
}

export type InitialStateType = typeof initialState

// ====================================================
// Reducer

type ActionsTypes =
	| toggleFollowStateSuccessType
	| setUsersIsFetchingType
	| setFollowingIsFetchingType
	| setUsersType

const usersReducer = (
	state = initialState,
	action: ActionsTypes
): InitialStateType => {
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
				followingIsFetching: action.followingIsFetching
					? [...state.followingIsFetching, action.id]
					: state.followingIsFetching.filter(id => id != action.id),
			}
		default:
			return state
	}
}

// ====================================================
// Action creators

type setUsersType = {
	users: Array<UserType>
	type: typeof typeSetUsers
}

export const setUsers = (users: Array<UserType>): setUsersType => ({
	type: typeSetUsers,
	users,
})

// =====================

type toggleFollowStateSuccessType = {
	id: number
	nextFollowState: boolean
	type: typeof typeToggleFollowState
}
export const toggleFollowStateSuccess = (
	id: number,
	nextFollowState: boolean
): toggleFollowStateSuccessType => ({
	type: typeToggleFollowState,
	id,
	nextFollowState,
})

// =====================

type setUsersIsFetchingType = {
	boolean: boolean
	type: typeof typeSetUsersIsFetching
}
export const setUsersIsFetching = (
	boolean: boolean
): setUsersIsFetchingType => ({
	type: typeSetUsersIsFetching,
	boolean,
})

// =====================

type setFollowingIsFetchingType = {
	id: number
	followingIsFetching: boolean
	type: typeof typeSetFollowingIsFetching
}
export const setFollowingIsFetching = (
	followingIsFetching: boolean,
	id: number
): setFollowingIsFetchingType => ({
	type: typeSetFollowingIsFetching,
	followingIsFetching,
	id,
})

// ====================================================
// Thunks

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

// =====================

export const getUsers = (i: number): ThunkType => {
	return async dispatch => {
		dispatch(setUsersIsFetching(true))
		usersAPI.getUsersAPI(i).then(data => {
			dispatch(setUsersIsFetching(false))
			dispatch(setUsers(data.items))
		})
	}
}

// =====================

export const toggleFollowState =
	(userId: number, nextFollowState: boolean): ThunkType =>
	async (dispatch: any) => {
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
