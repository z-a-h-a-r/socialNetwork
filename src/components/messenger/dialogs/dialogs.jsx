// ====================================================
// IMPORTS
// Main
// Styles
import st from './dialogs.module.scss'
// Components
import DialogLink from './dialogLink/dialogLink'

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
