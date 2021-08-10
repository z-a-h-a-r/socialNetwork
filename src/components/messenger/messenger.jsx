// ====================================================
// IMPORTS
// Main
// Styles
import st from './messenger.module.scss'
// Components
import MessagesContainer from './messages/messagesContainer'
import DialogsContainer from './dialogs/dialogsContainer'

// ====================================================
// Component

const Messenger = props => {
	return (
		<div className={st.messenger}>
			<DialogsContainer />
			<MessagesContainer />
		</div>
	)
}

// ====================================================
// Exports

export default Messenger
