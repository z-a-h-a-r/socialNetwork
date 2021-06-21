import Message from './message/message'
import Messages from './messages'

import {
	sendMessageActionCreator,
	updateMessageContentActionCreator,
} from '../../../redux/messangerReducer'

// ===================================================

const MessagesContainer = props => {
	const store = props.store
	const state = props.store.getState()

	function sendMessage() {
		store.dispatch(sendMessageActionCreator())
	}

	function inputChange(inputValue) {
		store.dispatch(updateMessageContentActionCreator(inputValue))
	}

	let editedMessages = state.messangerPage.messages.map(d => (
		<Message content={d.content} id={d.id} time={d.time} />
	))
	// ===================================================
	// html
	return (
		<Messages
			messages={state.messangerPage.messages}
			newMessageContent={state.messangerPage.newMessageContent}
			sendMessage={sendMessage}
			inputChange={inputChange}
			editedMessages={editedMessages}
		/>
	)
}

// ===================================================

export default MessagesContainer
