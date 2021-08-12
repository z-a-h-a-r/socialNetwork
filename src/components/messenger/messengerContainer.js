// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
import { compose } from 'redux'
// Components
import Messenger from './messenger'
// Reducers

// ====================================================
// MSTP & MDTP

let mapStateToProps = state => ({})

// ====================================================
// Compose

export default compose(connect(mapStateToProps))(Messenger)
