// ====================================================
// IMPORTS
// Main
import { FC } from 'react'
import { NavLink } from 'react-router-dom'
// Styles
import st from './navbar.module.scss'
// Components

// ====================================================
// Component

type PropsType = {}

const Navbar: FC<PropsType> = props => {
	return (
		<div className={st.wrapper}>
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
					</ul>
				</div>
			</nav>
		</div>
	)
}

// ====================================================
// Exports

export default Navbar
