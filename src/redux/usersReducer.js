const follow = 'FOLLOW'
const unFollow = 'UNFOLLOW'
const setUser = 'SET_USER'
const setIsFetching = 'SET_IS_FETCHING'

// ====================================================

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

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case follow:
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

		case unFollow:
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

		case setUser:
			return {
				...state,
				users: [...state.users, ...action.users],
			}

		case setIsFetching:
			return {
				...state,
				isFetchingData: action.boolean,
			}

		default:
			return state
	}
}

// ====================================================

export const followAC = userId => ({ type: follow, userId })
export const unFollowAC = userId => ({ type: unFollow, userId })
export const setUsersAC = users => ({ type: setUser, users })
export const setIsFetchingAC = boolean => ({ type: setIsFetching, boolean })

// ====================================================

export default usersReducer
