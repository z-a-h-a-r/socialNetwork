import { NavLink } from 'react-router-dom'
import st from './messenger.module.scss'

// ===================================================

import MessagesContainer from './messages/MessagesContainer'
import DialogsContainer from './dialogs/dialogsContainer'

// ===================================================

const Messenger = props => {
	return (
		<div className={st.messenger}>
			<DialogsContainer />
			<MessagesContainer />
		</div>
	)
}

// ===================================================

export default Messenger
