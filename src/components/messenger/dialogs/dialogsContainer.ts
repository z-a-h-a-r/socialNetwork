// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
import { AppStateType } from '../../../redux/store'
// Components
import Dialogs from './dialogs'
// Reducers

// ====================================================
// MSTP & MDTP

type Dialog = {
	name: string
	id: number
}

export type DialogsStateType = {
	dialogsList: Array<Dialog>
}
export type DialogsDispatchType = {}
export type DialogsOwnType = {}

let mapStateToProps = (state: AppStateType): DialogsStateType => ({
	dialogsList: state.messangerPage.dialogsLinksData,
})

// ====================================================
// Connect & withRouter

const DialogsContainer = connect<
	DialogsStateType,
	DialogsDispatchType,
	DialogsOwnType,
	AppStateType
>(
	mapStateToProps,
	{}
)(Dialogs)

// ====================================================
// Exports

export default DialogsContainer
