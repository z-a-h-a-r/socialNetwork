// ====================================================
// Global components
import Header from '../../components/header/header'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'

// ====================================================
// Local components
import Content from './components/content/content'

// ====================================================

const Main_page = () => {
	return (
		<div className="main-page">
			<Header />

			<div className="container main-page__inner">
				<Navbar />
				<Content />
			</div>

			<Footer />
		</div>
	)
}

// ====================================================
// export
import './style.scss'

export default Main_page
