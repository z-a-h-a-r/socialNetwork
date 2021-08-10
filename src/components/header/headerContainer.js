// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
// Components
import Header from './header'
// Reducers
import { logout } from '../../redux/authReducer'

// ====================================================
// MSTP & MDTP

let mapStateToProps = state => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
})

// ====================================================
// Connect & withRouter

const HeaderContainer = connect(mapStateToProps, { logout })(Header)

// ====================================================
// Exports

export default HeaderContainer
