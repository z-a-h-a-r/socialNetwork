// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
import { AppStateType } from '../../../redux/store'
import { UserType } from '../../../types/types'
// Components
import User from './user'
// Reducers
import { toggleFollowState } from '../../../redux/usersReducer'

// ====================================================
// MSTP & MDTP

export type UserStateType = {
	followingIsFetching: Array<number>
}
export type UserDispatchType = {
	toggleFollowState: (userId: number, nextFollowState: boolean) => void
}
export type UserOwnType = {
	name: string
	id: number
	status: string
	avatarUrl: string | null
	followed: boolean
}

let mapStateToProps = (state: AppStateType): UserStateType => ({
	followingIsFetching: state.userPage.followingIsFetching,
})

// ====================================================
// Connect & withRouter

const UserContainer = connect<
	UserStateType,
	UserDispatchType,
	UserOwnType,
	AppStateType
>(mapStateToProps, {
	toggleFollowState,
})(User)

// ====================================================
// Exports

export default UserContainer
