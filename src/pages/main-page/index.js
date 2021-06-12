import st from './style.module.scss'

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
		<div className={st.mainPage}>
			<Header />

			<div className={`${st.inner} container`}>
				<Navbar />
				<Content />
			</div>

			<Footer />
		</div>
	)
}

// ====================================================
// export

export default Main_page
