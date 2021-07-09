// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
import axios from 'axios'
// Components
import Header from './Header'
// Reducers
import { setAuthUserData } from '../../redux/authReducer'

// ====================================================
// MSTP & MDTP

let mapStateToProps = state => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
})
let mapDispatchToProps = dispatch => ({
	tryLogin: () => {
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
				withCredentials: true,
			})
			.then(response => {
				console.log(response)
				if (response.data.resultCode === 0) {
					let { id, email, login } = response.data.data
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
