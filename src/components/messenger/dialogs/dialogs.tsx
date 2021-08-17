// ====================================================
// IMPORTS
// Main
import {
	DialogsDispatchType,
	DialogsOwnType,
	DialogsStateType,
} from './dialogsContainer'
import { FC } from 'react'
// Styles
import st from './dialogs.module.scss'
// Components
import DialogLink from './dialogLink/dialogLink'

// ====================================================
// Component

type PropsType = DialogsStateType & DialogsDispatchType & DialogsOwnType

const Dialogs: FC<PropsType> = props => {
	return (
		<div className={st.dialogs}>
			{props.dialogsList.map(dialog => (
				<DialogLink name={dialog.name} id={dialog.id} key={Date.now()} />
			))}
		</div>
	)
}

// ====================================================
// Exports

export default Dialogs
