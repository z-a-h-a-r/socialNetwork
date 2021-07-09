// ====================================================
// Types

const typeFollow = 'FOLLOW'
const typeUnFollow = 'UNFOLLOW'
const typeSetUser = 'SET_USER'
const typeSetIsFetching = 'SET_IS_FETCHING'

// ====================================================
// Initial state

let initialState = {
	users: [
		{
			userId: 1,
			name: 'Name - 1',
			photos: { small: null },
			location: { city: 'Moskow', country: 'Russia' },
			status: 'Do it',
			followed: false,
		},
	],
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
					if (user.id === action.userId) {
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
					if (user.id === action.userId) {
						return { ...user, followed: false }
					} else {
						return user
					}
				}),
			}

		case typeSetUser:
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

export const follow = userId => ({ type: typeFollow, userId })
export const unFollow = userId => ({ type: typeUnFollow, userId })
export const setUsers = users => ({ type: typeSetUser, users })
export const setIsFetching = boolean => ({ type: typeSetIsFetching, boolean })

// ====================================================
// Exports

export default usersReducer
