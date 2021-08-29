// ====================================================
// IMPORTS
// Main
import { friendsAPI } from '../api/friendsAPI'
import { UserType } from '../types/types'
import { BaseThunkType, GetActionsTypes } from './store'

// ====================================================
// Types
const typeSetFriendsIsFetching = 'SN/USERS/SET-FRIENDS-IS-FETCHING'
const typeSetFollowingIsFetching = 'SN/USERS/SET-FOLLOWING-IS-FETCHING'
const typeToggleFollowState = 'SN/USERS/TOGGLE-FOLLOWING-STATE'
const typeAddFriends = 'SN/USERS/ADD-FRIENDS'
const typeSetFriends = 'SN/USERS/SET-FRIENDS'
const typeClearFriends = 'SN/USERS/CLEAR-FRIENDS'
const typeSetTerm = 'SN/USERS/SET-TERM'

// ====================================================
// Initial state

let initialState = {
	friends: [] as Array<UserType>,
	usersIsFetching: false as boolean,
	followingIsFetching: [] as Array<number>, // array of user id
	isFetchingData: false as boolean,
	term: '' as string,
}

type InitialStateType = typeof initialState

// ====================================================
// Reducer

const friendsReducer = (
	state = initialState,
	action: ActionsTypes
): InitialStateType => {
	switch (action.type) {
		case typeToggleFollowState:
			return {
				...state,
				friends: state.friends.map(user => {
					if (user.id === action.id) {
						return { ...user, followed: action.nextFollowState }
					} else {
						return user
					}
				}),
			}

		case typeAddFriends:
			return {
				...state,
				friends: [...state.friends, ...action.friends],
			}
		case typeSetFriends:
			return {
				...state,
				friends: [...action.friends],
			}

		case typeSetFriendsIsFetching:
			return {
				...state,
				isFetchingData: action.boolean,
			}
		case typeClearFriends:
			return {
				...state,
				friends: [],
			}

		case typeSetTerm:
			return {
				...state,
				term: action.term,
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

type ActionsTypes = GetActionsTypes<typeof friendsActions>

export const friendsActions = {
	addFriends: (friends: Array<UserType>) =>
		({
			type: typeAddFriends,
			friends,
		} as const),

	setFriends: (friends: Array<UserType>) =>
		({
			type: typeSetFriends,
			friends,
		} as const),

	toggleFollowStateSuccess: (id: number, nextFollowState: boolean) =>
		({
			type: typeToggleFollowState,
			id,
			nextFollowState,
		} as const),

	setFriendsIsFetching: (boolean: boolean) =>
		({
			type: typeSetFriendsIsFetching,
			boolean,
		} as const),

	setFollowingIsFetching: (followingIsFetching: boolean, id: number) =>
		({
			type: typeSetFollowingIsFetching,
			followingIsFetching,
			id,
		} as const),

	clearFriends: () =>
		({
			type: typeClearFriends,
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

export const getFriends = (i: number): ThunkType => {
	return async dispatch => {
		dispatch(friendsActions.setFriendsIsFetching(true))
		friendsAPI.getFriendsAPI(i).then(data => {
			dispatch(friendsActions.addFriends(data.items))
			dispatch(friendsActions.setFriendsIsFetching(false))
		})
	}
}
export const toggleFollowState =
	(userId: number, nextFollowState: boolean): ThunkType =>
	async dispatch => {
		dispatch(friendsActions.setFollowingIsFetching(true, userId))

		let data = await friendsAPI.toggleFollowAPI(userId, nextFollowState)

		if (data.resultCode === 0) {
			dispatch(friendsActions.toggleFollowStateSuccess(userId, nextFollowState))
			dispatch(friendsActions.setFollowingIsFetching(false, userId))
		}
	}
export const searchFriends = (
	i: number,
	term: string,
	willSet: boolean
): ThunkType => {
	return async dispatch => {
		dispatch(friendsActions.setFriendsIsFetching(true))
		friendsAPI.searchFriendsAPI(i, term).then(data => {
			if (willSet) {
				dispatch(friendsActions.setFriends(data.items))
			} else {
				dispatch(friendsActions.addFriends(data.items))
			}

			dispatch(friendsActions.setFriendsIsFetching(false))
		})
	}
}
// ====================================================
// Exports

export default friendsReducer
