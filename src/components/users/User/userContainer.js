import { connect } from 'react-redux'
import { follow, unFollow } from '../../../redux/usersReducer'
import User from './User'

// ===================================================

let mapStateToProps = state => {
	return {
		users: state.userPage.users,
	}
}

const UserContainer = connect(mapStateToProps, { follow, unFollow })(User)

// ===================================================

export default UserContainer
