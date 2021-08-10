// ====================================================
// IMPORTS
// Main
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { tryLogin } from './redux/authReducer'
import { useEffect } from 'react'
// Styles
import './scss/#zeroing.scss'
import './scss/style.scss'
import './scss/common-styles.scss'
// Components
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import MessengerContainer from './components/messenger/messengerContainer'
import ProfileContainer from './components/profile/profileContainer'
import UsersContainer from './components/users/usersContainer'
import HeaderContainer from './components/header/headerContainer'
import LoginContainer from './components/login/loginContainer'

// ====================================================
// Component

const App = () => {
	useEffect(() => {
		tryLogin()
	}, [])
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/login" render={() => <LoginContainer />} />
				<Route render={() => <AppWithLogin />} />
			</Switch>
		</BrowserRouter>
	)
}

const AppWithLogin = () => {
	return (
		<>
			<HeaderContainer />
			<div className="container flex">
				<Navbar />

				<Route path="/profile/:userId?" render={() => <ProfileContainer />} />
				<Route path="/messenger" render={() => <MessengerContainer />} />
				<Route path="/users" render={() => <UsersContainer />} />
			</div>
			<Footer />
		</>
	)
}

// ====================================================
// Exports

export default App
