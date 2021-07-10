// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
// Components
import Users from './Users'
// Reducers
import { setUsersIsFetching, setUsers } from '../../redux/usersReducer'
// DAL
import { getUsersAPI } from '../../api/api'

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
	getUsers: i => {
		dispatch(setUsersIsFetching(true))
		getUsersAPI(i).then(data => {
			dispatch(setUsersIsFetching(false))
			dispatch(setUsers(data.items))
		})
	},
})

// ====================================================
// Connect & withRouter

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

// ====================================================
// Exports

export default UsersContainer
