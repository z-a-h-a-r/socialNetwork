// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRedirect } from '../../hoc/withRedirect'
// Components
import Messenger from './messenger'
// Reducers

// ====================================================
// MSTP & MDTP

let mapStateToProps = state => ({})

// ====================================================
// Compose

export default compose(withRedirect, connect(mapStateToProps))(Messenger)
