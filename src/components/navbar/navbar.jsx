// ====================================================
// IMPORTS
// Main
import { NavLink } from 'react-router-dom'
// Styles
import st from './Navbar.module.scss'
// Components

// ====================================================
// Component

const Navbar = () => {
	return (
		<nav className={st.navbar}>
			<div className={st.inner}>
				<div className={st.title}>Menu</div>
				<ul className={st.ul}>
					<li className={st.li}>
						<NavLink
							exact
							to="/profile"
							className={st.link}
							activeClassName={st.active}
						>
							Profile
						</NavLink>
					</li>
					<li className={st.li}>
						<NavLink
							exact
							to="/messenger"
							className={st.link}
							activeClassName={st.active}
						>
							Messenger
						</NavLink>
					</li>
					<li className={st.li}>
						<NavLink
							exact
							to="/users"
							className={st.link}
							activeClassName={st.active}
						>
							Users
						</NavLink>
					</li>

					{/* <li className={st.li}>
						<a href="" className={st.link}>
							News
						</a>
					</li>
					<li className={st.li}>
						<a href="" className={st.link}>
							Music
						</a>
					</li>
					<li className={st.li}>
						<a href="" className={st.link}>
							Videos
						</a>
					</li>
					<li className={st.li}>
						<a href="" className={st.link}>
							Games
						</a>
					</li>
					<li className={st.li}>
						<a href="" className={st.link}>
							Apps
						</a>
					</li> */}
				</ul>
			</div>
		</nav>
	)
}

// ====================================================
// Exports

export default Navbar
