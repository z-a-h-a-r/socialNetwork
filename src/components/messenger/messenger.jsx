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
				stateSendMessage={props.stateSendMessage}
				messages={props.state.messages}
				newMessageContent={props.state.newMessageContent}
				updateNewMessageContent={props.updateNewMessageContent}
			/>
		</div>
	)
}

// ===================================================

export default Messenger
