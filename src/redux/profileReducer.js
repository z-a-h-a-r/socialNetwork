// ====================================================
// Types

import { getProfileDataAPI, getStatusAPI, updateStatusAPI } from '../api/api'

const typeCreatePost = 'CREATE-POST'
const typeSetProfile = 'SET-PROFILE'
const typeSetStatus = 'SET-STATUS'

// ====================================================
// Initial state

let initialState = {
	profile: {
		photos: {},
		// aboutMe: '1122',
	},
	postsData: [
		{ content: 'postsData', sharedCount: 0, commentsCount: 0 },
		{ content: 'postsData', sharedCount: 0, commentsCount: 0 },
		{ content: 'postsData', sharedCount: 0, commentsCount: 0 },
	],
}

// ====================================================
// Reducer

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case typeCreatePost: {
			return {
				...state,
				postsData: [
					...state.postsData,
					{
						...action.content,
						sharedCount: 0,
						commentsCount: 0,
					},
				],
				newPostContent: '',
			}
		}

		case typeSetProfile: {
			return {
				...state,
				...state.profile,
				profile: action.profile,
			}
		}
		case typeSetStatus: {
			return {
				...state,

				profile: {
					...state.profile,
					aboutMe: action.status,
				},
			}
		}
		default:
			return state
	}
}

// ====================================================
// Action creators

export const createPost = content => ({ type: typeCreatePost, content })

export const setProfile = profile => ({
	type: typeSetProfile,
	profile,
})
export const setStatus = status => ({
	type: typeSetStatus,
	status,
})

export const getInf = userId => dispatch => {
	getProfileDataAPI(userId).then(data => {
		dispatch(setProfile(data))
	})
}
export const getStatus = userId => dispatch => {
	getStatusAPI(userId).then(data => {
		dispatch(setStatus(data))
	})
}
export const updateStatus = status => dispatch => {
	updateStatusAPI(status).then(data => {
		if (data.resultCode == 0) {
			dispatch(setStatus(status))
		} else {
			console.error(data)
		}
	})
}
// ====================================================
// Exports

export default profileReducer
