import { connect } from 'react-redux'
import { followAC, unFollowAC } from '../../../redux/usersReducer'
import User from './User'

// ===================================================

let mapStateToProps = state => {
	return {
		users: state.userPage.users,
	}
}
let mapDispatchToProps = dispatch => {
	return {
		follow: userId => {
			dispatch(followAC(userId))
		},
		unFollow: userId => {
			dispatch(unFollowAC(userId))
		},
	}
}
const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User)

// ===================================================

export default UserContainer
