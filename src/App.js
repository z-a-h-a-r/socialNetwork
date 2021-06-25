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

import Header from './components/header/header'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Messenger from './components/messenger/messenger'
import ProfileContainer from './components/profile/profileContainer'
import UsersContainer from './components/users/UsersContainer'

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
