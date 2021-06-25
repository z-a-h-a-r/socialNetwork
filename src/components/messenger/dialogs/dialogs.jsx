import st from './dialogs.module.scss'
import DialogLink from './dialogLink/dialogLink'
// ===================================================

const Dialogs = props => {
	let editedDialogsLinksData = props.toEdit.map(l => (
		<DialogLink name={l.name} id={l.id} />
	))
	return <div className={st.dialogs}>{editedDialogsLinksData}</div>
}

// ===================================================

export default Dialogs
