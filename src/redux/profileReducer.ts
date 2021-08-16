// ====================================================
// Types

import { profileAPI } from '../api/profileAPI'
import { postType, profileType } from '../types/types'
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

const profileReducer = (
	state = initialState,
	action: any
): InitialStateType => {
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
	content: string
}
export const createPost = (content: string): createPostType => ({
	type: typeCreatePost,
	content,
})

// =====================

type setProfileType = {
	type: typeof typeSetProfile
	profile: object
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
export const deletePost = (postId: number) => ({
	type: typeDeletePost,
	postId,
})

// =====================

type saveAvatarSucessType = {
	type: typeof typeSaveAvatarSucess
	file: object
}
export const saveAvatarSucess = (file: object) => ({
	type: typeSaveAvatarSucess,
	file,
})

// ====================================================
// Thunks

export const getInf = (userId: number) => (dispatch: any) => {
	profileAPI.getProfileDataAPI(userId).then(data => {
		dispatch(setProfile(data))
	})
}
export const getStatus = (userId: number) => (dispatch: any) => {
	profileAPI.getStatusAPI(userId).then(data => {
		dispatch(setStatus(data))
	})
}
export const updateStatus = (status: string) => (dispatch: any) => {
	profileAPI.updateStatusAPI(status).then(data => {
		if (data.resultCode == 0) {
			dispatch(setStatus(status))
		} else {
			console.error(data)
		}
	})
}
export const saveAvatar = (file: object, userId: number) => (dispatch: any) => {
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
