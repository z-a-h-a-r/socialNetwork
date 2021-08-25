import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { AppStateType } from '../redux/store'

export type postType = {
	content: string
	sharedCount: number
	commentsCount: number
	postId: number
}
export type ProfileType = {
	userId: number | null
	aboutMe: string
	lookingForAJob: boolean | null
	lookingForAJobDescription: string | null
	fullName: string
	contacts: contactsType | null
	photos: photosType
}
export type contactsType = {
	github: string | null
	vk: string | null
	facebook: string | null
	instagram: string | null
	twitter: string | null
	website: string | null
	youtube: string | null
	mainLink: string | null
}
export type photosType = {
	large: string | null
	small: string | null
}

// --------------------------------------

export type UserType = {
	id: number
	name: string
	status: string
	photos: photosType
	followed: boolean
}

// --------------------------------------

// type thunkType = ThunkAction<
// 	Promise<void>,
// 	AppStateType,
// 	unknown,
// 	Action<string>
// >
