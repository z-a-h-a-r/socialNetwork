// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
// Components
import Dialogs from './Dialogs'
// Reducers

// ====================================================
// MSTP & MDTP

let mapStateToProps = state => ({
	toEdit: state.messangerPage.dialogsLinksData,
})
let mapDispatchToProps = dispatch => ({})

// ====================================================
// Connect & withRouter

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

// ====================================================
// Exports

export default DialogsContainer
