// ====================================================
// IMPORTS
// Main
// Styles
import st from './messenger.module.scss'
import { FC } from 'react'
// Components
import MessagesContainer from './messages/messagesContainer'
import DialogsContainer from './dialogs/dialogsContainer'

// ====================================================
// Component

type PropsType = {}

const Messenger: FC<PropsType> = props => {
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
