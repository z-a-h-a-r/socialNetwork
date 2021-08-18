// ====================================================
// IMPORTS
// Main
import { FC } from 'react'
import {
	MessagesDispatchType,
	MessagesOwnType,
	MessagesStateType,
} from './messagesContainer'
// Styles
import st from './messages.module.scss'
// Components
import Message from './message/message'
import MessagesForm from './messagesForm/messagesForm'

// ====================================================
// Component

type PropsType = MessagesStateType & MessagesDispatchType & MessagesOwnType

const Messages: FC<PropsType> = props => {
	const onSubmit = (formData: any) => {
		props.sendMessage(formData.newContent)
	}
	// ===================================================
	// html
	return (
		<div className={st.messagesWrap}>
			<div className={st.info}>
				<div className={st.infoLeft}>
					<div className={st.icon}></div>
					<div className={st.name}></div>
				</div>
				<div className={st.infoRight}>
					<div className={st.about}>about</div>
				</div>
			</div>
			<div className={st.messages}>
				{props.messages.map(message => (
					<Message
						content={message.content}
						id={message.id}
						time={message.time}
						// key={Date.now()}
					/>
				))}
			</div>
			<MessagesForm onSubmit={onSubmit} />
		</div>
	)
}

// ====================================================
// Exports

export default Messages
