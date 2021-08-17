// ====================================================
// IMPORTS
// Main
import { FC } from 'react'
import { NavLink } from 'react-router-dom'
// Styles
import st from './header.module.scss'
import {
	HeaderStateType,
	HeaderDispatchType,
	HeaderOwnType,
} from './headerContainer'

// ====================================================
// Component

type PropsType = HeaderStateType & HeaderDispatchType & HeaderOwnType

const Header: FC<PropsType> = props => {
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
