// ====================================================
// IMPORTS
// Main
import { FC } from 'react'
// Styles
import st from './message.module.scss'
// Components

// ====================================================
// Component

type PropsType = {
	content: string
	time: string
	id: number
}

const Message: FC<PropsType> = props => {
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
