// Main
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route } from 'react-router-dom'

// ====================================================
// Styles

import './#other/#zeroing.scss'
import './#other/style.scss'
import './#other/common-styles.scss'

// ====================================================
// Components

import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Messenger from './components/Messenger/messenger'
import ProfileContainer from './components/Profile/profileContainer'
import UsersContainer from './components/Users/usersContainer'

// ====================================================

const App = props => {
	return (
		<BrowserRouter>
			<Header />

			<div className="container flex">
				<Navbar />

				<Route path="/profile" render={() => <ProfileContainer />} />
				<Route path="/messenger" render={() => <Messenger />} />
				<Route path="/users" render={() => <UsersContainer />} />
			</div>

			<Footer />
		</BrowserRouter>
	)
}

// ====================================================
// export

export default App
