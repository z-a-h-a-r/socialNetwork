// ====================================================
// IMPORTS
// Main
import { FC } from 'react'
import { NavLink } from 'react-router-dom'
// Styles
import st from './dialogLink.module.scss'
// Components

// ====================================================
// Component

type PropsType = {
	name: string
	id: number
}

const DialogLink: FC<PropsType> = props => {
	return (
		<NavLink to="/dialogs/1" className={st.linkBody}>
			<div className={st.avatar}>chat</div>
			<p>{props.name}</p>
			<div className={st.lastMessage}>[ last message will be here ]</div>
		</NavLink>
	)
}

// ====================================================
// Exports

export default DialogLink
