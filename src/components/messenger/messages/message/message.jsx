import st from './message.module.scss'

// ===================================================

const Message = props => {
	return (
		<div className={st.contentBody}>
			<p className={st.content}>{props.content}</p>
			<p className={st.time}>{props.time}</p>
		</div>
	)
}

// ===================================================
// export

export default Message
