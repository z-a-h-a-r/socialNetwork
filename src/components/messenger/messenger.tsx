// ====================================================
// IMPORTS
// Main
// Styles
import st from './messenger.module.scss'
import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
	messengerActions,
	sendMessage,
	startWSListening,
	stopWSListening,
} from '../../redux/messangerReducer'
// Components
import MessagesContainer from './messages/messages'
import DialogsContainer from './dialogs/dialogsContainer'

// ====================================================
// Component

type PropsType = {}
const Messenger: FC<PropsType> = props => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(startWSListening())
		return () => {
			dispatch(stopWSListening())
		}
	}, [])
	return (
		<div className={st.messenger}>
			<DialogsContainer />
			<MessagesContainer />
		</div>
	)
}

// ====================================================
// Exports

export default Messenger
