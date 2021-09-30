// ====================================================
// IMPORTS
// Main
import { FC } from 'react'
// Styles
import st from './messages.module.scss'
// Components
import Message from './message/message'
import MessagesForm from './messagesForm/messagesForm'
import { useSelector } from 'react-redux'
import { AppStateType } from '../../../redux/store'

// ====================================================
// Component

type PropsType = {}

const Messages: FC<PropsType> = props => {
	// ====================================================
	// state

	const messages = useSelector(
		(state: AppStateType) => state.messangerPage.messages
	)
	const authId = useSelector((state: AppStateType) => state.auth.id)

	// ===================================================
	// JSX
	return (
		<div className={st.messagesWrap}>
			<div className={st.info}>
				<div className={st.infoLeft}>
					<div className={st.icon}>chat</div>
					<div className={st.name}></div>
				</div>
				<div className={st.infoRight}>
					<div className={st.about}>about</div>
				</div>
			</div>
			<div className={st.messages}>
				{messages.map(message => {
					let isMy
					if (authId == message.userId) {
						isMy = true
					} else {
						isMy = false
					}

					return (
						<Message
							isMy={isMy}
							message={message.message}
							userId={message.userId}
							userName={message.userName}
							photo={message.photo}
						/>
					)
				})}
			</div>
			<MessagesForm />
		</div>
	)
}

// ====================================================
// Exports

export default Messages
