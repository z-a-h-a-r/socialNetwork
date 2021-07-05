import { NavLink } from 'react-router-dom'
import st from './DialogLink.module.scss'

// ===================================================

const DialogLink = props => {
	return (
		<NavLink to="/dialogs/1" className={st.linkBody}>
			<div className={st.avatar}></div>
			<p>{props.name}</p>{' '}
			<div className={st.lastMessage}>Lorem ipsum dolor sit amet.</div>
		</NavLink>
	)
}

// ===================================================

export default DialogLink
