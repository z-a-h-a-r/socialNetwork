// ====================================================
// IMPORTS
// Main
import 'bootstrap/dist/css/bootstrap.min.css'
import { Redirect, Route, Switch } from 'react-router-dom'
import { initialize } from './redux/appReducer'
import { lazy, useEffect } from 'react'
import { connect } from 'react-redux'
import React, { Suspense } from 'react'
// Styles
import './scss/#zeroing.scss'
import './scss/style.scss'
import './scss/common-styles.scss'
// Components
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Header from './components/header/headerContainer'
import Login from './components/login/loginContainer'
import Loading from './components/common/Loading/Loading'
import { AppStateType } from './redux/store'
import Friends from './components/friends/friendsContainer'
// Pages components
const Users = lazy(() => import('./components/users/usersContainer'))
const Profile = lazy(() => import('./components/profile/profileContainer'))
const Messenger = lazy(
	() => import('./components/messenger/messengerContainer')
)

// ====================================================
// Component

const App = (props: PropsType) => {
	useEffect(() => {
		props.initialize()
	}, [])

	if (!props.initialized) {
		return <Loading />
	} else {
		return (
			<>
				{!props.isAuth ? (
					<Login />
				) : (
					<>
						<Header />
						<div className="container flex">
							<Navbar />

							<Suspense fallback={<div>Loading...</div>}>
								<Switch>
									<Route
										path="/profile/:userId?"
										render={() => <Profile key={window.location.pathname} />}
									/>
									<Route path="/messenger" render={() => <Messenger />} />
									<Route path="/users" render={() => <Users />} />
									<Route path="/friends" render={() => <Friends />} />
									<Redirect from="/" to="/profile" />
									<Route path="*" render={() => <p>Page not found (404)</p>} />
								</Switch>
							</Suspense>
						</div>
						<Footer />
					</>
				)}
			</>
		)
	}
}

// ====================================================

let mapStateToProps = (state: AppStateType) => ({
	isAuth: state.auth.isAuth,
	initialized: state.app.initialized,
})

// ====================================================

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = { initialize: () => void }
type PropsType = MapPropsType & DispatchPropsType

// ====================================================
// Exports

export default connect(mapStateToProps, { initialize })(App)
