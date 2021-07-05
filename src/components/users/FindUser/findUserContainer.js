import { connect } from 'react-redux'
import FindUser from './FindUser'

// ===================================================

let mapStateToProps = state => {
	return {}
}
let mapDispatchToProps = dispatch => {
	return {}
}
const FindUsersContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(FindUser)

// ===================================================

export default FindUsersContainer
