import st from './Dialogs.module.scss'
import DialogLink from './DialogLink/DialogLink'
// ===================================================

const Dialogs = props => {
	let editedDialogsLinksData = props.toEdit.map(l => (
		<DialogLink name={l.name} id={l.id} />
	))
	return <div className={st.dialogs}>{editedDialogsLinksData}</div>
}

// ===================================================

export default Dialogs
