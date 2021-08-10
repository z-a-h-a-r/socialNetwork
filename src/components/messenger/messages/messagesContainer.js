// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
// Components
import Messages from './messages'
// Reducers
import { sendMessage } from '../../../redux/messangerReducer'

// ====================================================
// MSTP & MDTP

let mapStateToProps = state => ({
	messages: state.messangerPage.messages,
})

// ====================================================
// Connect & withRouter

const MessagesContainer = connect(mapStateToProps, { sendMessage })(Messages)

// ====================================================
// Exports

export default MessagesContainer
