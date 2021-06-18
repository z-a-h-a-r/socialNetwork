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
import Profile from './components/profile/profile'
import Messenger from './components/messenger/messenger'

// ====================================================

const App = props => {
	return (
		<BrowserRouter>
			<>
				<Header />

				<div className="container flex">
					<Navbar />

					<Route
						path="/profile"
						render={() => (
							<Profile
								state={props.state.profilePage}
								stateCreatePost={props.stateCreatePost}
								updateNewPostContent={props.updateNewPostContent}
							/>
						)}
					/>
					<Route
						path="/messenger"
						render={() => (
							<Messenger
								state={props.state.messangerPage}
								stateSendMessage={props.stateSendMessage}
								updateNewMessageContent={props.updateNewMessageContent}
							/>
						)}
					/>
				</div>

				<Footer />
			</>
		</BrowserRouter>
	)
}

// ====================================================
// export

export default App
