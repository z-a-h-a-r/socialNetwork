// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
import { compose } from 'redux'
import { AppStateType } from '../../redux/store'
// Components
import Login from './login'
// Reducers
import { login, getCaptcha } from '../../redux/authReducer'

// ====================================================
// types

export type LoginStateType = {
	isAuth: boolean
	captchaUrl: string | null
}
export type LoginDispatchType = {
	login: (
		email: string,
		password: string,
		rememberMe: boolean,
		captcha: string
	) => void
	getCaptcha: () => void
}
export type LoginOwnType = {}

// ====================================================
// MSTP & MDTP

let mapStateToProps = (state: AppStateType): LoginStateType => ({
	isAuth: state.auth.isAuth,
	captchaUrl: state.auth.captchaUrl,
})

// ====================================================
// Compose

export default compose(
	connect<LoginStateType, LoginDispatchType, LoginOwnType, AppStateType>(
		mapStateToProps,
		{ login, getCaptcha }
	)
)(Login)
