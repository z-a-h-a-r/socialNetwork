// ====================================================
// IMPORTS
// Main
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route } from 'react-router-dom'
// Styles
import './#other/#zeroing.scss'
import './#other/style.scss'
import './#other/common-styles.scss'
// Components
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import MessengerContainer from './components/Messenger/messengerContainer'
import ProfileContainer from './components/Profile/profileContainer'
import UsersContainer from './components/Users/usersContainer'
import HeaderContainer from './components/Header/headerContainer'
import Login from './components/Login/Login'

// ====================================================
// Component

const App = () => {
	return (
		<BrowserRouter>
			<HeaderContainer />

			<div className="container flex">
				<Navbar />

				<Route path="/profile/:userId?" render={() => <ProfileContainer />} />
				<Route path="/messenger" render={() => <MessengerContainer />} />
				<Route path="/users" render={() => <UsersContainer />} />
				<Route path="/login" render={() => <Login />} />
			</div>

			<Footer />
		</BrowserRouter>
	)
}

// ====================================================
// Exports

export default App
