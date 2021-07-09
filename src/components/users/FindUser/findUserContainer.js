// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
// Components
import FindUser from './FindUser'
// Reducers

// ====================================================
// MSTP & MDTP

let mapStateToProps = state => ({})

// ====================================================
// Connect & withRouter

const FindUsersContainer = connect(mapStateToProps, {})(FindUser)

// ====================================================
// Exports

export default FindUsersContainer
