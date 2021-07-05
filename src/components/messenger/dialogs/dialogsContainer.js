import Dialogs from './Dialogs'
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
