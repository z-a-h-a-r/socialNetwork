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
	message: string
	userId: number
	userName: string
	photo: string
	isMy: boolean
}

const Message: FC<PropsType> = props => {
	return (
		<>
			{props.isMy ? (
				<div className={st.messageWrapRight}>
					<div className={st.contentBodyRight + ' ' + st.contentBody}>
						<p className={st.content}>{props.message}</p>
						<p className={st.time}>{props.userName}</p>
					</div>
				</div>
			) : (
				<div className={st.messageWrapLeft}>
					<div className={st.contentBodyLeft + ' ' + st.contentBody}>
						<p className={st.content}>{props.message}</p>
						<p className={st.time}>{props.userName}</p>
					</div>
				</div>
			)}
		</>
	)
}

// ====================================================
// Exports

export default Message
