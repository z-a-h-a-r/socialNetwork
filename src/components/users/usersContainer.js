// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
import { withRedirect } from '../../hoc/withRedirect'
import { compose } from 'redux'
// Components
import Users from './users'
// Reducers
import { getUsers } from '../../redux/usersReducer'

// ====================================================
// MSTP & MDTP

let mapStateToProps = state => ({
	users: state.userPage.users,
	isFetchingData: state.userPage.isFetchingData,
})

// ====================================================
// Compose

export default compose(
	withRedirect,
	connect(mapStateToProps, { getUsers })
)(Users)
