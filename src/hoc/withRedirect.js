// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

// ====================================================
// HOC

export const withRedirect = Component => {
	let mapStateToProps = state => ({
		isAuth: state.auth.isAuth,
	})

	const RedirectComponent = props => {
		if (!props.isAuth) {
			return <Redirect to={'/login'} />
		} else {
			return <Component {...props} />
		}
	}

	const ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

	return ConnectedRedirectComponent
}
