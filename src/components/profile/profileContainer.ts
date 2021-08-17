// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { AppStateType } from '../../redux/store'
import { compose } from 'redux'
import { postType } from '../../types/types'
// Components
import Profile from './profile'
// Reducers
import {
	getStatus,
	getInf,
	updateStatus,
	createPost,
	deletePost,
} from '../../redux/profileReducer'

// ====================================================
// MSTP & MDTP

export type ProfileStateType = {
	postsData: Array<postType>
	aboutMe: string
	fullName: string
	largePhoto: string | null
	userId: number | null
}
export type ProfileDispatchType = {
	getInf: (userId: number) => void
	getStatus: (userId: number) => void
	updateStatus: (status: string) => void
	createPost: (content: string) => void
	deletePost: (postId: number) => void
}
export type ProfileOwnType = { match: any }

let mapStateToProps = (state: AppStateType): ProfileStateType => ({
	postsData: state.profilePage.postsData,
	aboutMe: state.profilePage.profile.aboutMe,
	fullName: state.profilePage.profile.fullName,
	largePhoto: state.profilePage.profile.photos.large,
	userId: state.auth.id,
})

// ====================================================
// Compose

export default compose(
	withRouter,
	connect<ProfileStateType, ProfileDispatchType, ProfileOwnType, AppStateType>(
		mapStateToProps,
		{
			getInf,
			getStatus,
			updateStatus,
			createPost,
			deletePost,
		}
	)
)(Profile)
