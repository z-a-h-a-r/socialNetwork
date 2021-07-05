import { connect } from 'react-redux'
import { setIsFetchingAC, setUsersAC } from '../../redux/usersReducer'
import Users from './Users'
import * as axios from 'axios'

// ===================================================

let mapStateToProps = state => {
	return {
		users: state.userPage.users,
		isFetchingData: state.userPage.isFetchingData,
	}
}
let mapDispatchToProps = (dispatch, state) => {
	return {
		setUsers: users => {
			dispatch(setUsersAC(users))
		},
		getUsers: (i, boolean) => {
			dispatch(setIsFetchingAC(boolean))
			axios
				.get(`https://social-network.samuraijs.com/api/1.0/users?page=${i}`)
				.then(response => {
					dispatch(setIsFetchingAC(false))
					dispatch(setUsersAC(response.data.items))
				})
		},
	}
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

// ===================================================

export default UsersContainer
