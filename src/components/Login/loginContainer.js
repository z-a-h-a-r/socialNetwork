// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
import { compose } from 'redux'
// Components
import Login from './login'
// Reducers
import { login } from '../../redux/authReducer'

// ====================================================
// MSTP & MDTP

let mapStateToProps = state => ({
	isAuth: state.auth.isAuth,
})

// ====================================================
// Compose

export default compose(connect(mapStateToProps, { login }))(Login)
