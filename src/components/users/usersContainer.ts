// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
import { compose } from 'redux'
import { AppStateType } from '../../redux/store'
import { UserType } from '../../types/types'
// Components
import Users from './users'
// Reducers
import { getUsers } from '../../redux/usersReducer'

// ====================================================
// MSTP & MDTP

export type UsersStateType = {
	users: Array<UserType>
	isFetchingData: boolean
}
export type UsersDispatchType = {
	getUsers: (i: number) => void
}
export type UsersOwnType = {}

let mapStateToProps = (state: AppStateType) => ({
	users: state.userPage.users,
	isFetchingData: state.userPage.isFetchingData,
})

// ====================================================
// Compose

export default compose(
	connect<UsersStateType, UsersDispatchType, UsersOwnType, AppStateType>(
		mapStateToProps,
		{ getUsers }
	)
)(Users)
