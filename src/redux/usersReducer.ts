// ====================================================
// IMPORTS
// Main
import { usersAPI } from '../api/usersAPI'
import { UserType } from '../types/types'
import { BaseThunkType, GetActionsTypes } from './store'

// ====================================================
// Types

const typeSetUsers = 'SN/USERS/SET-USERS'
const typeAddUsers = 'SN/USERS/ADD-USERS'
const typeSetUsersIsFetching = 'SN/USERS/SET-USERS-IS-FETCHING'
const typeSetFollowingIsFetching = 'SN/USERS/SET-FOLLOWING-IS-FETCHING'
const typeToggleFollowState = 'SN/USERS/TOGGLE-FOLLOWING-STATE'
// const typeSetCurrentPage = 'SN/USERS/SET-CURRENT-PAGE'
const typeSetTerm = 'SN/USERS/SET-TERM'

// ====================================================
// Initial state

let initialState = {
	users: [] as Array<UserType>,
	usersIsFetching: false as boolean,
	followingIsFetching: [] as Array<number>, // array of user id
	isFetchingData: false as boolean,
	term: '' as string,
	// currentPage: 0 as number,
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
		case typeAddUsers:
			return {
				...state,
				users: [...state.users, ...action.users],
			}

		case typeSetUsers:
			return {
				...state,
				users: [...action.users],
			}

		// case typeSetCurrentPage:
		// 	return {
		// 		...state,
		// 		currentPage: action.currentPage,
		// 	}

		case typeSetTerm:
			return {
				...state,
				term: action.term,
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
	addUsers: (users: Array<UserType>) =>
		({
			type: typeAddUsers,
			users,
		} as const),

	setUsers: (users: Array<UserType>) =>
		({
			type: typeSetUsers,
			users,
		} as const),

	// setCurrentPage: (currentPage: number) =>
	// 	({
	// 		type: typeSetCurrentPage,
	// 		currentPage,
	// 	} as const),

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

	setTerm: (term: string) =>
		({
			type: typeSetTerm,
			term,
		} as const),
}

// ====================================================
// Thunks

type ThunkType = BaseThunkType<ActionsTypes>

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

export const searchUsers = (
	i: number,
	term: string,
	willSet: boolean
): ThunkType => {
	return async dispatch => {
		dispatch(usersActions.setUsersIsFetching(true))
		usersAPI.searchUsersAPI(i, term).then(data => {
			if (willSet) {
				dispatch(usersActions.setUsers(data.items))
			} else {
				dispatch(usersActions.addUsers(data.items))
			}
			dispatch(usersActions.setUsersIsFetching(false))
		})
	}
}

// ====================================================
// Exports

export default usersReducer
