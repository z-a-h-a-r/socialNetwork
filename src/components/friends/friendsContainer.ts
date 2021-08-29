// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
import { compose } from 'redux'
import { AppStateType } from '../../redux/store'
import { UserType } from '../../types/types'
import React from 'react'
// Components
import Friends from './friends'
// Reducers
import {
	getFriends,
	friendsActions,
	searchFriends,
} from '../../redux/friendsReducer'

// ====================================================
// MSTP & MDTP

export type FriendsStateType = {
	friends: Array<UserType>
	isFetchingData: boolean
	term: string
}
export type FriendsDispatchType = {
	getFriends: (i: number) => void
	clearFriends: () => void
	searchFriends: (i: number, term: string, willSet: boolean) => void
}
export type FriendsOwnType = {}

let mapStateToProps = (state: AppStateType) => ({
	friends: state.friendsPage.friends,
	isFetchingData: state.friendsPage.isFetchingData,
	term: state.friendsPage.term,
})

// ====================================================
// Compose

export default compose(
	connect<FriendsStateType, FriendsDispatchType, FriendsOwnType, AppStateType>(
		mapStateToProps,
		{ getFriends, clearFriends: friendsActions.clearFriends, searchFriends }
	)
)(Friends) as React.ComponentType
