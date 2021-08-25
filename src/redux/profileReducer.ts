// ====================================================
// IMPORTS
// Main
import { ThunkAction } from 'redux-thunk'
import { profileAPI } from '../api/profileAPI'
import { postType, ProfileType } from '../types/types'
import { AppStateType, BaseThunkType, GetActionsTypes } from './store'

// ====================================================
// Types
const typeCreatePost = 'SN/PROFILE/CREATE-POST'
const typeSetProfile = 'SN/PROFILE/SET-PROFILE'
const typeSetStatus = 'SN/PROFILE/SET-STATUS'
const typeDeletePost = 'SN/PROFILE/DELETE-POST'
const typeSaveAvatarSucess = 'SN/PROFILE/SAVE-AVATAR-SUCESS'

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
	} as ProfileType,
	postsData: [
		{
			content: 'TEST',
			sharedCount: 0,
			commentsCount: 0,
			postId: Date.now(),
		},
	] as Array<postType>,
}

type InitialStateType = typeof initialState

// ====================================================
// Reducer

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
				profile: { ...state.profile, photos: action.file } as ProfileType,
			}
		}
		default:
			return state
	}
}

// ====================================================
// Action creators

type ActionsTypes = GetActionsTypes<typeof profileActions>

export const profileActions = {
	createPostSuccess: (newContent: string) =>
		({
			type: typeCreatePost,
			newContent,
		} as const),
	setProfile: (profile: ProfileType) =>
		({
			type: typeSetProfile,
			profile,
		} as const),
	setStatus: (status: string) =>
		({
			type: typeSetStatus,
			status,
		} as const),
	deletePostSuccess: (postId: number) =>
		({
			type: typeDeletePost,
			postId,
		} as const),
	saveAvatarSuccess: (file: object) =>
		({
			type: typeSaveAvatarSucess,
			file,
		} as const),
}

// ====================================================
// Thunks

type ThunkType = BaseThunkType<ActionsTypes>

export const getInf = (userId: number): ThunkType => {
	return async dispatch => {
		profileAPI.getProfileDataAPI(userId).then(data => {
			dispatch(profileActions.setProfile(data))
		})
	}
}
export const getStatus = (userId: number): ThunkType => {
	return async dispatch => {
		profileAPI.getStatusAPI(userId).then(data => {
			dispatch(profileActions.setStatus(data))
		})
	}
}
export const updateStatus = (status: string): ThunkType => {
	return async dispatch => {
		profileAPI.updateStatusAPI(status).then(data => {
			if (data.resultCode == 0) {
				dispatch(profileActions.setStatus(status))
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
export const deletePost = (postId: number): ThunkType => {
	return async dispatch => {
		dispatch(profileActions.deletePostSuccess(postId))
	}
}
export const createPost = (newContent: string): ThunkType => {
	return async dispatch => {
		dispatch(profileActions.createPostSuccess(newContent))
	}
}

// ====================================================
// Exports

export default profileReducer
