import Message from './message/message'
import Messages from './messages'

import {
	sendMessageActionCreator,
	updateMessageContentActionCreator,
} from '../../../redux/messangerReducer'
import { connect } from 'react-redux'

// ===================================================

let mapStateToProps = state => {
	return {
		messages: state.messangerPage.messages,
		newMessageContent: state.messangerPage.newMessageContent,
		toEdit: state.messangerPage.messages,
	}
}
let mapDispatchToProps = dispatch => {
	return {
		sendMessage: () => {
			dispatch(sendMessageActionCreator())
		},
		inputChange: inputValue => {
			dispatch(updateMessageContentActionCreator(inputValue))
		},
	}
}
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

// ===================================================

export default MessagesContainer
