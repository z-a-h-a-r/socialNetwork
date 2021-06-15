import { NavLink } from 'react-router-dom'
import st from './messenger.module.scss'

// ===================================================

import Dialogs from './dialogs/dialogs'
import Messages from './messages/messages'

// ===================================================

const Messenger = props => {
	return (
		<div className={st.messenger}>
			<Dialogs dialogsLinksData={props.dialogsLinksData} />
			<Messages messages={props.messages} />
		</div>
	)
}

// ===================================================

export default Messenger
