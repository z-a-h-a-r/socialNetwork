// ====================================================
// Types

import { getProfileDataAPI, getStatusAPI, updateStatusAPI } from '../api/api'

const typeCreatePost = 'CREATE-POST'
const typeUpdatePostContent = 'UPDATE-POST-CONTENT'
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
	newPostContent: '',
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
						content: state.newPostContent,
						sharedCount: 0,
						commentsCount: 0,
					},
				],
				newPostContent: '',
			}
		}
		case typeUpdatePostContent: {
			return {
				...state,
				newPostContent: action.postContent,
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

export const createPost = () => ({ type: typeCreatePost })
export const updatePostContent = textAreaValue => ({
	type: typeUpdatePostContent,
	postContent: textAreaValue,
})
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
export const updateStatus = (status, userId) => dispatch => {
	updateStatusAPI(status).then(data => {
		if (data.resultCode == 0) {
			dispatch(getStatus(userId))
		} else {
			console.error(data)
		}
	})
}
// ====================================================
// Exports

export default profileReducer
