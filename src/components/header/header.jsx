import st from './Header.module.scss'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

// ====================================================

const Header = props => {
	useState(() => {
		props.tryLogin()
	})
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

export default Header
