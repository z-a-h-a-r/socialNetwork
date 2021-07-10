// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
// Components
import User from './User'
// Reducers
import {
	follow,
	unFollow,
	setFollowingIsFetching,
} from '../../../redux/usersReducer'

// ====================================================
// MSTP & MDTP

let mapStateToProps = state => ({
	users: state.userPage.users,
	followingIsFetching: state.userPage.followingIsFetching,
})

// ====================================================
// Connect & withRouter

const UserContainer = connect(mapStateToProps, {
	follow,
	unFollow,
	setFollowingIsFetching,
})(User)

// ====================================================
// Exports

export default UserContainer
