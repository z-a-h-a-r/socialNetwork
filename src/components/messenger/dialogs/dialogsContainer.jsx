import Dialogs from './dialogs'
import { connect } from 'react-redux'

// ===================================================

let mapStateToProps = state => {
	return {
		toEdit: state.messangerPage.dialogsLinksData,
	}
}
let mapDispatchToProps = dispatch => {
	return {}
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

// ===================================================

export default DialogsContainer