import st from './Messages.module.scss'

// ===================================================

import Message from './Message/Message'
import React from 'react'

// ===================================================

const Messages = props => {
	let refInput = React.createRef()

	const onButtonClick = () => {
		if (refInput.current.value !== '') {
			props.sendMessage()
		}
	}
	const onEnterClick = e => {
		if ((e.keyCode === 13) & (refInput.current.value !== '')) {
			props.sendMessage()
		}
	}
	const onInputChange = () => {
		let inputValue = refInput.current.value
		props.updateMessageContent(inputValue)
	}
	let editedMessages = props.toEdit.map(d => (
		<Message content={d.content} id={d.id} time={d.time} />
	))

	// ===================================================

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
			<div className={st.messages}>{editedMessages}</div>
			<div className={st.inputWrap}>
				<input
					type="text"
					ref={refInput}
					onChange={onInputChange}
					value={props.newMessageContent}
					className={st.input}
					onKeyDown={onEnterClick}
					placeholder="type message..."
				/>
				<button className={st.button} onClick={onButtonClick}>
					send
				</button>
			</div>
		</div>
	)
}

// ===================================================

export default Messages
