import st from './messages.module.scss'

// ===================================================

import Message from './message/message'

// ===================================================

const Messages = props => {
	// ===================================================
	// edited data

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
				<input type="text" className={st.input} />
				<button className={st.button}>sent</button>
			</div>
		</div>
	)
}

// ===================================================

export default Messages
