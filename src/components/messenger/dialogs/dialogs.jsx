// ====================================================
// IMPORTS
// Main
// Styles
import st from './Dialogs.module.scss'
// Components
import DialogLink from './DialogLink/DialogLink'

// ====================================================
// Component

const Dialogs = props => {
	let editedDialogsLinksData = props.toEdit.map(l => (
		<DialogLink name={l.name} id={l.id} />
	))
	return <div className={st.dialogs}>{editedDialogsLinksData}</div>
}

// ====================================================
// Exports

export default Dialogs
