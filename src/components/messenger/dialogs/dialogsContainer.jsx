import st from './dialogs.module.scss'

// ===================================================

import DialogLink from './dialogLink/dialogLink'
import Dialogs from './dialogs'

// ===================================================

const DialogsContainer = props => {
	const store = props.store

	let editedDialogsLinksData = store
		.getState()
		.messangerPage.dialogsLinksData.map(l => (
			<DialogLink name={l.name} id={l.id} />
		))

	// ===================================================
	// html

	return <Dialogs editedDialogsLinksData={editedDialogsLinksData} />
}

// ===================================================

export default DialogsContainer
