import { NavLink } from 'react-router-dom'
import st from './messenger.module.scss'

// ===================================================

import Dialogs from './dialogs/dialogs'
import Messages from './messages/messages'

// ===================================================

const Messenger = props => {
	return (
		<div className={st.messenger}>
			<Dialogs dialogsLinksData={props.state.dialogsLinksData} />
			<Messages
				messages={props.state.messages}
				newMessageContent={props.state.newMessageContent}
				dispatch={props.dispatch}
			/>
		</div>
	)
}

// ===================================================

export default Messenger
