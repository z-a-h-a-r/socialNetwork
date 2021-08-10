// ====================================================
// IMPORTS
// Main
import { NavLink } from 'react-router-dom'
// Styles
import st from './Header.module.scss'

// ====================================================
// Component

const Header = props => {
	return (
		<header className={st.header}>
			<div className="container">
				<div className={st.inner}>
					<div className={st.logo}>online</div>
					<div className={st.auth}>
						{props.isAuth ? (
							<button onClick={props.logout}>logout</button>
						) : (
							<NavLink to="/login">login</NavLink>
						)}
					</div>
				</div>
			</div>
		</header>
	)
}

// ====================================================
// Exports

export default Header
