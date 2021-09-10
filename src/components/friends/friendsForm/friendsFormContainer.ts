// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
import { compose } from 'redux'
import { AppStateType } from '../../../redux/store'
import React from 'react'
// Components
import FriendsForm from './friendsForm'
// Reducers
import { getFriends, friendsActions } from '../../../redux/friendsReducer'

// ====================================================
// MSTP & MDTP

export type FriendsFormStateType = {}
export type FriendsFormDispatchType = {
	getFriends: (i: number, term: string, willSet: boolean) => void
	setTerm: (term: string) => any
}
export type FriendsFormOwnType = {}

let mapStateToProps = (state: AppStateType) => ({})

// ====================================================
// Compose

export default compose(
	connect<
		FriendsFormStateType,
		FriendsFormDispatchType,
		FriendsFormOwnType,
		AppStateType
	>(mapStateToProps, { getFriends, setTerm: friendsActions.setTerm })
)(FriendsForm) as React.ComponentType
