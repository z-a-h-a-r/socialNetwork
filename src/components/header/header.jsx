// ====================================================
// IMPORTS
// Main
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
// Styles
import st from './Header.module.scss'

// ====================================================
// Component

const Header = props => {
	useEffect(() => {
		props.tryLogin()
	}, [])
	return (
		<header className={st.header}>
			<div className="container">
				<div className={st.inner}>
					<div className={st.logo}>online</div>
					<div className={st.auth}>
						{props.isAuth ? props.login : <NavLink to="/login">login</NavLink>}
					</div>
				</div>
			</div>
		</header>
	)
}

// ====================================================
// Exports

export default Header
