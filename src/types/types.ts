export type postType = {
	content: string
	sharedCount: number
	commentsCount: number
	postId: number
}
export type profileType = {
	userId: number
	aboutMe: string
	lookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	contacts: contactsType
	photos: photosType
}
export type contactsType = {
	github: string
	vk: string
	facebook: string
	instagram: string
	twitter: string
	website: string
	youtube: string
	mainLink: string
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
