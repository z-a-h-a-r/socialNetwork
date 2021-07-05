import st from './messenger.module.scss'

// ===================================================

import MessagesContainer from './Messages/messagesContainer'
import DialogsContainer from './Dialogs/dialogsContainer'

// ===================================================

const Messenger = props => {
	return (
		<div className={st.messenger}>
			<DialogsContainer />
			<MessagesContainer />
		</div>
	)
}

// ===================================================

export default Messenger
