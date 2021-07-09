// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
// Components
import User from './User'
// Reducers
import { follow, unFollow } from '../../../redux/usersReducer'

// ====================================================
// MSTP & MDTP

let mapStateToProps = state => ({
	users: state.userPage.users,
})

// ====================================================
// Connect & withRouter

const UserContainer = connect(mapStateToProps, { follow, unFollow })(User)

// ====================================================
// Exports

export default UserContainer
