import { connect } from 'react-redux'
import FindUser from './FindUser'

// ===================================================

let mapStateToProps = state => {
	return {}
}

const FindUsersContainer = connect(mapStateToProps, {})(FindUser)

// ===================================================

export default FindUsersContainer
