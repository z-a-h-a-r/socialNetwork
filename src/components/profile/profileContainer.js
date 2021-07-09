// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
// Components
import Profile from './Profile'
// Reducers
import { setProfile } from './../../redux/profileReducer'

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
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
			.then(response => {
				dispatch(setProfile(response.data))
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
