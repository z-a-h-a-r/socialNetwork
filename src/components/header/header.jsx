import st from './Header.module.scss'

// ====================================================

const Header = () => {
	return (
		<header className={st.header}>
			<div className="container">
				<div className={st.inner}>
					<div className={st.logo}>online</div>
					<div className={st.name}>
						<p>Tyler</p>
						<div className={st.img}></div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
