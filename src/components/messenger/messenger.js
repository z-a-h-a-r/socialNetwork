// ====================================================
// IMPORTS
// Main
// Styles
import st from './Messenger.module.scss'
// Components
import MessagesContainer from './Messages/messagesContainer'
import DialogsContainer from './Dialogs/dialogsContainer'

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
