// ====================================================
// Types

import { profileAPI } from '../api/profileAPI'
const typeCreatePost = 'CREATE-POST'
const typeSetProfile = 'SET-PROFILE'
const typeSetStatus = 'SET-STATUS'
const typeDeletePost = 'DELETE-POST'
const typeSaveAvatarSucess = 'SAVE-AVATAR-SUCESS'

// ====================================================
// Initial state

let initialState = {
	profile: {
		photos: {},
		// aboutMe: '1122',
	},
	postsData: [
		{
			content: 'TEST',
			sharedCount: 0,
			commentsCount: 0,
			postId: Date.now(),
		},
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
						postId: Date.now(),
					},
				],
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
		case typeDeletePost: {
			return {
				...state,

				postsData: state.postsData.filter(p => p.postId != action.postId),
			}
		}
		case typeSaveAvatarSucess: {
			return {
				...state,
				...state.photos,
				photos: { large: action.file },
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
export const deletePost = postId => ({
	type: typeDeletePost,
	postId,
})
export const saveAvatarSucess = file => ({ type: typeSaveAvatarSucess, file })
// ====================================================
// Thunks

export const getInf = userId => dispatch => {
	profileAPI.getProfileDataAPI(userId).then(data => {
		dispatch(setProfile(data))
	})
}
export const getStatus = userId => dispatch => {
	profileAPI.getStatusAPI(userId).then(data => {
		dispatch(setStatus(data))
	})
}
export const updateStatus = status => dispatch => {
	profileAPI.updateStatusAPI(status).then(data => {
		if (data.resultCode == 0) {
			dispatch(setStatus(status))
		} else {
			console.error(data)
		}
	})
}

export const saveAvatar = (file, userId) => dispatch => {
	profileAPI.saveAvatarAPI(file).then(data => {
		if (data.resultCode === 0) {
			dispatch(getInf(userId))
		} else {
			console.error(data)
		}
	})
}
// ====================================================
// Exports

export default profileReducer
