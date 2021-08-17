// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
import { compose } from 'redux'
import { AppStateType } from '../../redux/store'
// Components
import Messenger from './messenger'
// Reducers

// ====================================================
// MSTP & MDTP

let mapStateToProps = (state: AppStateType) => ({})

// ====================================================
// Compose

export default compose(connect(mapStateToProps))(Messenger)
