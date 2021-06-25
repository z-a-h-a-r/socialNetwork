import { connect } from 'react-redux'
import { followAC, unFollowAC } from '../../redux/usersReducer'
import Users from './Users'

// ===================================================

let mapStateToProps = state => {
	return {
		toEdit: state.userPage.users,
	}
}
let mapDispatchToProps = dispatch => {
	return {
		follow: () => {
			dispatch(followAC())
		},
		unFollow: () => {
			dispatch(unFollowAC())
		},
	}
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

// ===================================================

export default UsersContainer
