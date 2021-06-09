import './navbar.scss'

// ====================================================

const Navbar = () => {
	return (
		<nav className="n-navbar">
			<div className="n-navbar__inner">
				<div className="n-navbar__title">Menu</div>
				<ul className="n-navbar__ul">
					<li className="n-navbar__li">
						<a href="" className="n-navbar__link">
							Profile
						</a>
					</li>
					<li className="n-navbar__li">
						<a href="" className="n-navbar__link">
							News
						</a>
					</li>
					<li className="n-navbar__li">
						<a href="" className="n-navbar__link">
							Messenger
						</a>
					</li>
					<li className="n-navbar__li">
						<a href="" className="n-navbar__link">
							Music
						</a>
					</li>
					<li className="n-navbar__li">
						<a href="" className="n-navbar__link">
							Videos
						</a>
					</li>
					<li className="n-navbar__li">
						<a href="" className="n-navbar__link">
							Games
						</a>
					</li>
					<li className="n-navbar__li">
						<a href="" className="n-navbar__link">
							Apps
						</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
