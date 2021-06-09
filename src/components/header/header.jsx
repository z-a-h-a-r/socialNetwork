import './header.scss'

// ====================================================

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="header__inner">
					<div className="header__logo">online</div>
					<div className="header__name">
						<p>Tyler</p>
						<div className="img"></div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
