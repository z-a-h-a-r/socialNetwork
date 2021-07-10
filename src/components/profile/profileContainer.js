// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// Components
import Profile from './Profile'
// Reducers
import { setProfile } from './../../redux/profileReducer'
import { getProfileDataAPI } from '../../api/api'

// ====================================================
// MSTP & MDTP

let mapStateToProps = state => ({
	toEdit: state.profilePage.postsData,
	aboutMe: state.profilePage.profile.aboutMe,
	fullName: state.profilePage.profile.fullName,
	largePhoto: state.profilePage.profile.photos.large,
})

let mapDispatchToProps = dispatch => ({
	setProfile: () => {
		dispatch(setProfile(users))
	},
	getInf: userId => {
		getProfileDataAPI(userId).then(data => {
			dispatch(setProfile(data))
		})
	},
})

// ====================================================
// Connect & withRouter

const WithRouterProfileContainer = withRouter(Profile)
const ProfileContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(WithRouterProfileContainer)

// ====================================================
// Exports

export default ProfileContainer
