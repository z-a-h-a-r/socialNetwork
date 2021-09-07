// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { AppStateType } from '../../../redux/store'
// Components
import Avatar from './avatar'
// Reducers
import { saveAvatar } from '../../../redux/profileReducer'

// ====================================================
// MSTP & MDTP

export type AvatarStateType = {
	fullName: string
	largePhoto: string | null
	userId: number | null
}
export type AvatarDispatchType = {
	saveAvatar: (file: object, userId: number, resolve: any) => void
}
export type AvatarOwnType = {
	isMyProfile: boolean
}

let mapStateToProps = (state: AppStateType): AvatarStateType => ({
	fullName: state.profilePage.profile.fullName,
	largePhoto: state.profilePage.profile.photos.large,
	userId: state.auth.id,
})

// ====================================================
// Compose

export default compose(
	withRouter,
	connect<AvatarStateType, AvatarDispatchType, AvatarOwnType, AppStateType>(
		mapStateToProps,
		{ saveAvatar }
	)
)(Avatar)
