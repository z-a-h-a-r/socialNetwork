// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
// Components
import Header from './Header'
// Reducers
import { tryLogin } from '../../redux/authReducer'

// ====================================================
// MSTP & MDTP

let mapStateToProps = state => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
})

// ====================================================
// Connect & withRouter

const HeaderContainer = connect(mapStateToProps, { tryLogin })(Header)

// ====================================================
// Exports

export default HeaderContainer
