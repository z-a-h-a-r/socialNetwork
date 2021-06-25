import { connect } from 'react-redux'
import Profile from './profile'

// ===================================================

let mapStateToProps = state => {
	return {
		toEdit: state.profilePage.postsData,
	}
}
let mapDispatchToProps = dispatch => {
	return {}
}
const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

// ===================================================

export default ProfileContainer
