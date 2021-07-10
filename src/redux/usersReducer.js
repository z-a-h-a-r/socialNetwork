// ====================================================
// Types

const typeFollow = 'FOLLOW'
const typeUnFollow = 'UNFOLLOW'
const typeSetUsers = 'SET_USERS'
const typeSetIsFetching = 'SET_IS_FETCHING'

// ====================================================
// Initial state

let initialState = {
	users: [],
	isFetchingData: false,
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

		case typeSetIsFetching:
			return {
				...state,
				isFetchingData: action.boolean,
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
export const setIsFetching = boolean => ({ type: typeSetIsFetching, boolean })

// ====================================================
// Exports

export default usersReducer
