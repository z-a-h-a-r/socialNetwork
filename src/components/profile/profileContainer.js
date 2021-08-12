// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
// Components
import Profile from './profile'
// Reducers
import {
	getStatus,
	getInf,
	updateStatus,
	createPost,
	deletePost,
} from './../../redux/profileReducer'

// ====================================================
// MSTP & MDTP

let mapStateToProps = state => ({
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
	connect(mapStateToProps, {
		getInf,
		getStatus,
		updateStatus,
		createPost,
		deletePost,
	})
)(Profile)
