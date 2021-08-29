// ====================================================
// IMPORTS
// Main
import { usersAPI } from '../api/usersAPI'
import { UserType } from '../types/types'
import { BaseThunkType, GetActionsTypes } from './store'

// ====================================================
// Types
const typeSetUsers = 'SN/USERS/SET-USERS'
const typeSetUsersIsFetching = 'SN/USERS/SET-USERS-IS-FETCHING'
const typeSetFollowingIsFetching = 'SN/USERS/SET-FOLLOWING-IS-FETCHING'
const typeToggleFollowState = 'SN/USERS/TOGGLE-FOLLOWING-STATE'
const typeClearUsers = 'SN/USERS/CLEAR-USERS'

// ====================================================
// Initial state

let initialState = {
	users: [] as Array<UserType>,
	usersIsFetching: false as boolean,
	followingIsFetching: [] as Array<number>, // array of user id
	isFetchingData: false as boolean,
}

type InitialStateType = typeof initialState

// ====================================================
// Reducer

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

		case typeClearUsers:
			return {
				...state,
				users: [],
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

type ActionsTypes = GetActionsTypes<typeof usersActions>

export const usersActions = {
	setUsers: (users: Array<UserType>) =>
		({
			type: typeSetUsers,
			users,
		} as const),

	clearUsers: () =>
		({
			type: typeClearUsers,
		} as const),

	toggleFollowStateSuccess: (id: number, nextFollowState: boolean) =>
		({
			type: typeToggleFollowState,
			id,
			nextFollowState,
		} as const),

	setUsersIsFetching: (boolean: boolean) =>
		({
			type: typeSetUsersIsFetching,
			boolean,
		} as const),

	setFollowingIsFetching: (followingIsFetching: boolean, id: number) =>
		({
			type: typeSetFollowingIsFetching,
			followingIsFetching,
			id,
		} as const),
}

// ====================================================
// Thunks

type ThunkType = BaseThunkType<ActionsTypes>

export const getUsers = (i: number): ThunkType => {
	return async dispatch => {
		dispatch(usersActions.setUsersIsFetching(true))
		usersAPI.getUsersAPI(i).then(data => {
			dispatch(usersActions.setUsers(data.items))
			dispatch(usersActions.setUsersIsFetching(false))
		})
	}
}

export const toggleFollowState =
	(userId: number, nextFollowState: boolean): ThunkType =>
	async dispatch => {
		dispatch(usersActions.setFollowingIsFetching(true, userId))

		let data = await usersAPI.toggleFollowAPI(userId, nextFollowState)

		if (data.resultCode === 0) {
			dispatch(usersActions.toggleFollowStateSuccess(userId, nextFollowState))
			dispatch(usersActions.setFollowingIsFetching(false, userId))
		}
	}

// ====================================================
// Exports

export default usersReducer
