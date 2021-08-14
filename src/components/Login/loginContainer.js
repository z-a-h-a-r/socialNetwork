// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
import { compose } from 'redux'
// Components
import Login from './login'
// Reducers
import { login, getCaptcha } from '../../redux/authReducer'

// ====================================================
// MSTP & MDTP

let mapStateToProps = state => ({
	isAuth: state.auth.isAuth,
	captchaUrl: state.auth.captchaUrl,
})

// ====================================================
// Compose

export default compose(connect(mapStateToProps, { login, getCaptcha }))(Login)
