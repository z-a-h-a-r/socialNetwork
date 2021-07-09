import { connect } from 'react-redux'
import Profile from './Profile'
import { setProfile } from './../../redux/profileReducer'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

// ===================================================

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

// ===================================================

const WithRouterProfileContainer = withRouter(Profile)
const ProfileContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(WithRouterProfileContainer)

// ===================================================

export default ProfileContainer
