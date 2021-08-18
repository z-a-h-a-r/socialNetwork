// ====================================================
// Types

import { ThunkAction } from 'redux-thunk'
import { profileAPI } from '../api/profileAPI'
import { postType, profileType } from '../types/types'
import { AppStateType } from './store'
const typeCreatePost = 'CREATE-POST'
const typeSetProfile = 'SET-PROFILE'
const typeSetStatus = 'SET-STATUS'
const typeDeletePost = 'DELETE-POST'
const typeSaveAvatarSucess = 'SAVE-AVATAR-SUCESS'

// ====================================================
// Initial state

let initialState = {
	profile: {
		userId: null,
		aboutMe: '',
		lookingForAJob: null,
		lookingForAJobDescription: null,
		fullName: '',
		contacts: {
			github: null,
			vk: null,
			facebook: null,
			instagram: null,
			twitter: null,
			website: null,
			youtube: null,
			mainLink: null,
		},
		photos: {
			large: null,
			small: null,
		},
	} as profileType,
	postsData: [
		{
			content: 'TEST',
			sharedCount: 0,
			commentsCount: 0,
			postId: Date.now(),
		},
	] as Array<postType>,
}

export type InitialStateType = typeof initialState
// ====================================================
// Reducer

type ActionsTypes =
	| createPostType
	| setProfileType
	| setStatusType
	| deletePostType
	| saveAvatarSucessType

const profileReducer = (
	state = initialState,
	action: ActionsTypes
): InitialStateType => {
	switch (action.type) {
		case typeCreatePost: {
			return {
				...state,
				postsData: [
					...state.postsData,
					{
						content: action.newContent,
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
				profile: { ...action.profile },
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
				profile: { ...state.profile, photos: action.file } as profileType,
			}
		}
		default:
			return state
	}
}

// ====================================================
// Action creators

type createPostType = {
	type: typeof typeCreatePost
	newContent: string
}
export const createPost = (newContent: string): createPostType => ({
	type: typeCreatePost,
	newContent,
})

// =====================

type setProfileType = {
	type: typeof typeSetProfile
	profile: profileType
}
export const setProfile = (profile: profileType): setProfileType => ({
	type: typeSetProfile,
	profile,
})

// =====================

type setStatusType = {
	type: typeof typeSetStatus
	status: string
}
export const setStatus = (status: string): setStatusType => ({
	type: typeSetStatus,
	status,
})

// =====================

type deletePostType = {
	type: typeof typeDeletePost
	postId: number
}
export const deletePost = (postId: number): deletePostType => ({
	type: typeDeletePost,
	postId,
})

// =====================

type saveAvatarSucessType = {
	type: typeof typeSaveAvatarSucess
	file: object
}
export const saveAvatarSucess = (file: object): saveAvatarSucessType => ({
	type: typeSaveAvatarSucess,
	file,
})

// ====================================================
// Thunks

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

// =====================

export const getInf = (userId: number): ThunkType => {
	return async dispatch => {
		profileAPI.getProfileDataAPI(userId).then(data => {
			dispatch(setProfile(data))
		})
	}
}
export const getStatus = (userId: number): ThunkType => {
	return async dispatch => {
		profileAPI.getStatusAPI(userId).then(data => {
			dispatch(setStatus(data))
		})
	}
}
export const updateStatus = (status: string): ThunkType => {
	return async dispatch => {
		profileAPI.updateStatusAPI(status).then(data => {
			if (data.resultCode == 0) {
				dispatch(setStatus(status))
			} else {
				console.error(data)
			}
		})
	}
}
export const saveAvatar = (file: object, userId: number): ThunkType => {
	return async dispatch => {
		profileAPI.saveAvatarAPI(file).then(data => {
			if (data.resultCode === 0) {
				dispatch(getInf(userId))
			} else {
				console.error(data)
			}
		})
	}
}

// ====================================================
// Exports

export default profileReducer
