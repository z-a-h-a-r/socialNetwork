// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
import { AppStateType } from '../../../redux/store'
// Components
import Messages from './messages'
// Reducers
import { sendMessage } from '../../../redux/messangerReducer'

// ====================================================
// MSTP & MDTP

type MessageType = {
	content: string
	id: number
	time: string
}
export type MessagesStateType = {
	messages: Array<MessageType>
}
export type MessagesDispatchType = {
	sendMessage: (newContent: string) => void
}
export type MessagesOwnType = {}

let mapStateToProps = (state: AppStateType): MessagesStateType => ({
	messages: state.messangerPage.messages,
})

// ====================================================
// Connect & withRouter

const MessagesContainer = connect<
	MessagesStateType,
	MessagesDispatchType,
	MessagesOwnType,
	AppStateType
>(mapStateToProps, { sendMessage })(Messages)

// ====================================================
// Exports

export default MessagesContainer
