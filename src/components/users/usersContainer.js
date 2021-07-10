// ====================================================
// IMPORTS
// Main
import * as axios from 'axios'
import { connect } from 'react-redux'
// Components
import Users from './Users'
// Reducers
import { setIsFetching, setUsers } from '../../redux/usersReducer'

// ====================================================
// MSTP & MDTP

let mapStateToProps = state => ({
	users: state.userPage.users,
	isFetchingData: state.userPage.isFetchingData,
})
let mapDispatchToProps = dispatch => ({
	setUsers: users => {
		dispatch(setUsers(users))
	},
	getUsers: (i, boolean) => {
		dispatch(setIsFetching(boolean))
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?page=${i}`, {
				withCredentials: true,
			})
			.then(response => {
				dispatch(setIsFetching(false))
				dispatch(setUsers(response.data.items))
			})
	},
})

// ====================================================
// Connect & withRouter

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

// ====================================================
// Exports

export default UsersContainer
