// ====================================================
// IMPORTS
// Main
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import { initialize } from './redux/appReducer'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import React, { Suspense, lazy } from 'react'
// Styles
import './scss/#zeroing.scss'
import './scss/style.scss'
import './scss/common-styles.scss'
// Components
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import HeaderContainer from './components/header/headerContainer'
import LoginContainer from './components/login/loginContainer'
import Loading from './components/common/Loading/Loading'
// Pages components
const UsersContainer = React.lazy(() =>
	import('./components/users/usersContainer')
)
const ProfileContainer = React.lazy(() =>
	import('./components/profile/profileContainer')
)
const MessengerContainer = React.lazy(() =>
	import('./components/messenger/messengerContainer')
)

// ====================================================
// Component

const App = props => {
	useEffect(() => {
		props.initialize()
	}, [])

	if (!props.initialized) {
		return <Loading />
	} else {
		return (
			<BrowserRouter>
				{!props.isAuth ? (
					<LoginContainer />
				) : (
					<>
						<HeaderContainer />
						<div className="container flex">
							<Navbar />

							<Suspense fallback={<div>Loading...</div>}>
								<Switch>
									<Route
										path="/profile/:userId?"
										render={() => (
											<ProfileContainer key={window.location.pathname} />
										)}
									/>
									<Route
										path="/messenger"
										render={() => <MessengerContainer />}
									/>
									<Route path="/users" render={() => <UsersContainer />} />
								</Switch>
							</Suspense>
						</div>
						<Footer />
					</>
				)}
			</BrowserRouter>
		)
	}
}

let mapStateToProps = state => ({
	isAuth: state.auth.isAuth,
	initialized: state.app.initialized,
})

// const App = props => {
// 	useEffect(() => {
// 		props.initialize()
// 	}, [])
// 	if (!props.initialized) {
// 		return <Loading />
// 	}
// 	return (
// 		<BrowserRouter>
// 			<Switch>
// 				<Route path="/login" render={() => <LoginContainer />} />
// 				<Route render={() => <AppWithLogin />} />
// 			</Switch>
// 		</BrowserRouter>
// 	)
// }

// const AppWithLogin = () => {
// 	return (
// 		<>
// 			<HeaderContainer />
// 			<div className="container flex">
// 				<Navbar />

// 				<Route path="/profile/:userId?" render={() => <ProfileContainer />} />
// 				<Route path="/messenger" render={() => <MessengerContainer />} />
// 				<Route path="/users" render={() => <UsersContainer />} />
// 			</div>
// 			<Footer />
// 		</>
// 	)
// }
// ====================================================
// Exports

export default connect(mapStateToProps, { initialize })(App)
