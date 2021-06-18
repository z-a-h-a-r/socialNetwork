import st from './messages.module.scss'

// ===================================================

import Message from './message/message'
import React from 'react'
import { logDOM } from '@testing-library/react'

import {
	sendMessageActionCreator,
	updateMessageContentActionCreator,
} from './../../../redux/state'

// ===================================================

const Messages = props => {
	let refInput = React.createRef()

	function onButtonClick() {
		if (refInput.current.value !== '') {
			props.dispatch(sendMessageActionCreator())
		}
	}
	function onEnterClick(e) {
		if ((e.keyCode === 13) & (refInput.current.value !== '')) {
			props.dispatch(sendMessageActionCreator())
		}
	}
	function onInputChange() {
		let inputValue = refInput.current.value
		props.dispatch(updateMessageContentActionCreator(inputValue))
	}

	// ===================================================

	let editedMessages = props.messages.map(d => (
		<Message content={d.content} id={d.id} time={d.time} />
	))

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
