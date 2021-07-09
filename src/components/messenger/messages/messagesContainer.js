// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
// Components
import Messages from './Messages'
// Reducers
import {
	sendMessage,
	updateMessageContent,
} from '../../../redux/messangerReducer'

// ====================================================
// MSTP & MDTP

let mapStateToProps = state => ({
	messages: state.messangerPage.messages,
	newMessageContent: state.messangerPage.newMessageContent,
	toEdit: state.messangerPage.messages,
})

// ====================================================
// Connect & withRouter

const MessagesContainer = connect(mapStateToProps, {
	sendMessage,
	updateMessageContent,
})(Messages)

// ====================================================
// Exports

export default MessagesContainer
