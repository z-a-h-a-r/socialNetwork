// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/store'
// Components
import Header from './header'
// Reducers
import { logout } from '../../redux/authReducer'

// ====================================================
// types

export type HeaderStateType = {
	isAuth: boolean
	login: string | null
}
export type HeaderDispatchType = {
	logout: () => void
}
export type HeaderOwnType = {}

// ====================================================
// MSTP & MDTP

let mapStateToProps = (state: AppStateType): HeaderStateType => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
})

// ====================================================
// Connect & withRouter

const HeaderContainer = connect<
	HeaderStateType,
	HeaderDispatchType,
	HeaderOwnType,
	AppStateType
>(mapStateToProps, { logout })(Header)

// ====================================================
// Exports

export default HeaderContainer
