// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
import { compose } from 'redux'
import { AppStateType } from '../../../redux/store'
import React from 'react'
// Components
import UsersForm from './usersForm'
// Reducers
import { getUsers, usersActions } from '../../../redux/usersReducer'

// ====================================================
// MSTP & MDTP

export type UsersFormStateType = {}
export type UsersFormDispatchType = {
	getUsers: (i: number, term: string, willSet: boolean) => void
	setTerm: (term: string) => any
}
export type UsersFormOwnType = {}

let mapStateToProps = (state: AppStateType) => ({})

// ====================================================
// Compose

export default compose(
	connect<
		UsersFormStateType,
		UsersFormDispatchType,
		UsersFormOwnType,
		AppStateType
	>(mapStateToProps, { getUsers, setTerm: usersActions.setTerm })
)(UsersForm) as React.ComponentType
