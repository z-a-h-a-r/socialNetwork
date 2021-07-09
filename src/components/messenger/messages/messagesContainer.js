import Messages from './Messages'

import {
	sendMessage,
	updateMessageContent,
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

const MessagesContainer = connect(mapStateToProps, {
	sendMessage,
	updateMessageContent,
})(Messages)

// ===================================================

export default MessagesContainer
