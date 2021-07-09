import { connect } from 'react-redux'
import { setIsFetching, setUsers } from '../../redux/usersReducer'
import Users from './Users'
import * as axios from 'axios'

// ===================================================

let mapStateToProps = state => {
	return {
		users: state.userPage.users,
		isFetchingData: state.userPage.isFetchingData,
	}
}
let mapDispatchToProps = dispatch => {
	return {
		setUsers: users => {
			dispatch(setUsers(users))
		},
		getUsers: (i, boolean) => {
			dispatch(setIsFetching(boolean))
			axios
				.get(`https://social-network.samuraijs.com/api/1.0/users?page=${i}`)
				.then(response => {
					dispatch(setIsFetching(false))
					dispatch(setUsers(response.data.items))
				})
		},
	}
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

// ===================================================

export default UsersContainer
