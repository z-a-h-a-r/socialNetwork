// ====================================================
// Types

import { getProfileDataAPI } from '../api/api'

const typeCreatePost = 'CREATE-POST'
const typeUpdatePostContent = 'UPDATE-POST-CONTENT'
const typeSetProfile = 'SET-PROFILE'

// ====================================================
// Initial state

let initialState = {
	profile: {
		photos: {},
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

export const getInf = userId => dispatch => {
	getProfileDataAPI(userId).then(data => {
		dispatch(setProfile(data))
	})
}

// ====================================================
// Exports

export default profileReducer
