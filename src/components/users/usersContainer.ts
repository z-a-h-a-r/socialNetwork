// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
import { compose } from 'redux'
import { AppStateType } from '../../redux/store'
import { UserType } from '../../types/types'
import React from 'react'
// Components
import Users from './users'
// Reducers
import { getUsers, usersActions, searchUsers } from '../../redux/usersReducer'
import { withRouter } from 'react-router-dom'

// ====================================================
// MSTP & MDTP

export type UsersStateType = {
	users: Array<UserType>
	isFetchingData: boolean
	term: string
}
export type UsersDispatchType = {
	getUsers: (i: number) => void
	searchUsers: (i: number, term: string, willSet: boolean) => void
	clearUsers: () => void
}
export type UsersOwnType = { match: any }

let mapStateToProps = (state: AppStateType) => ({
	users: state.userPage.users,
	isFetchingData: state.userPage.isFetchingData,
	term: state.userPage.term,
})

// ====================================================
// Compose

export default compose(
	withRouter,
	connect<UsersStateType, UsersDispatchType, UsersOwnType, AppStateType>(
		mapStateToProps,
		{ getUsers, clearUsers: usersActions.clearUsers, searchUsers }
	)
)(Users) as React.ComponentType
