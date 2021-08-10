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
	return (
		<div className={st.dialogs}>
			{props.toEdit.map(l => (
				<DialogLink name={l.name} id={l.id} key={Date.now} />
			))}
		</div>
	)
}

// ====================================================
// Exports

export default Dialogs
