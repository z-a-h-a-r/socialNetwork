const follow = 'FOLLOW'
const unFollow = 'UNFOLLOW'

// ====================================================

let initialState = {
	users: [
		{
			userId: 1,
			name: 'Name - 1',
			avatarUrl:
				'https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80',
			location: { city: 'Moskow', country: 'Russia' },
			status: 'Do it',
			followed: false,
		},
		{
			userId: 2,
			name: 'Name - 2',
			avatarUrl:
				'https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80',
			location: { city: 'Moskow', country: 'Russia' },
			status: 'Do it',
			followed: false,
		},
		{
			userId: 3,
			name: 'Name - 3',
			avatarUrl:
				'https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80',
			location: { city: 'Moskow', country: 'Russia' },
			status: 'Do it',
			followed: false,
		},
	],
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

		default:
			return state
	}
}

// ====================================================

export const followAC = () => ({ type: follow, userId: 1 })
export const unFollowAC = () => ({ type: unFollow, userId: 2 })

// ====================================================

export default usersReducer
