// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
// Components
import Header from './Header'
// Reducers
import { setAuthUserData } from '../../redux/authReducer'
// DAL
import { tryLoginAPI } from '../../api/api'

// ====================================================
// MSTP & MDTP

let mapStateToProps = state => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
})
let mapDispatchToProps = dispatch => ({
	tryLogin: () => {
		tryLoginAPI().then(data => {
			if (data.resultCode === 0) {
				let { id, email, login } = data.data
				dispatch(setAuthUserData(id, email, login))
			}
		})
	},
})

// ====================================================
// Connect & withRouter

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

// ====================================================
// Exports

export default HeaderContainer
