// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { withRedirect } from '../../hoc/withRedirect'
import { compose } from 'redux'
// Components
import Profile from './Profile'
// Reducers
import { getStatus, getInf, updateStatus } from './../../redux/profileReducer'

// ====================================================
// MSTP & MDTP

let mapStateToProps = state => ({
	toEdit: state.profilePage.postsData,
	aboutMe: state.profilePage.profile.aboutMe,
	fullName: state.profilePage.profile.fullName,
	largePhoto: state.profilePage.profile.photos.large,
	userId: state.auth.id,
})

// ====================================================
// Compose

export default compose(
	withRedirect,
	withRouter,
	connect(mapStateToProps, { getInf, getStatus, updateStatus })
)(Profile)
