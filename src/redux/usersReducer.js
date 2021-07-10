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

export const follow = id => ({ type: typeFollow, id })
export const unFollow = id => ({ type: typeUnFollow, id })
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
// Exports

export default usersReducer
