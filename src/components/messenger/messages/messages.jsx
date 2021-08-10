// ====================================================
// IMPORTS
// Main
import React from 'react'
// Styles
import st from './Messages.module.scss'
// Components
import Message from './Message/Message'
import MessagesForm from './MessagesForm/MessagesForm'

// ====================================================
// Component

const Messages = props => {
	const onSubmit = formData => {
		props.sendMessage(formData)
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
						key={Date.now}
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
