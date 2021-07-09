// ====================================================
// IMPORTS
// Main
// Styles
import st from './Message.module.scss'
// Components

// ====================================================
// Component

const Message = props => {
	return (
		<div className={st.contentBody}>
			<p className={st.content}>{props.content}</p>
			<p className={st.time}>{props.time}</p>
		</div>
	)
}

// ====================================================
// Exports

export default Message
