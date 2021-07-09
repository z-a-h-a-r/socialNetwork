// ====================================================
// IMPORTS
// Main
import { NavLink } from 'react-router-dom'
// Styles
import st from './DialogLink.module.scss'
// Components

// ====================================================
// Component

const DialogLink = props => {
	return (
		<NavLink to="/dialogs/1" className={st.linkBody}>
			<div className={st.avatar}></div>
			<p>{props.name}</p>{' '}
			<div className={st.lastMessage}>Lorem ipsum dolor sit amet.</div>
		</NavLink>
	)
}

// ====================================================
// Exports

export default DialogLink
