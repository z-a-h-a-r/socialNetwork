import st from './dialogs.module.scss'

// ===================================================

import DialogLink from './dialogLink/dialogLink'

// ===================================================

const Dialogs = props => {
	// ===================================================
	// edited data

	let editedDialogsLinksData = props.dialogsLinksData.map(l => (
		<DialogLink name={l.name} id={l.id} />
	))

	// ===================================================
	// html

	return <div className={st.dialogs}>{editedDialogsLinksData}</div>
}

// ===================================================

export default Dialogs
