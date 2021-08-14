// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
// Components
import Avatar from './avatar'
// Reducers
import { saveAvatar } from '../../../redux/profileReducer'

// ====================================================
// MSTP & MDTP

let mapStateToProps = state => ({
	fullName: state.profilePage.profile.fullName,
	largePhoto: state.profilePage.profile.photos.large,
	userId: state.auth.id,
})

// ====================================================
// Compose

export default compose(
	withRouter,
	connect(mapStateToProps, { saveAvatar })
)(Avatar)
