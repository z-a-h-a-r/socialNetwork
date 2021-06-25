import st from './Users.module.scss'

// ====================================================

import User from './User/User'
import FindUsersContainer from './FindUser/FindUserContainer'

// ====================================================

const Users = props => {
	let editedUsers = props.toEdit.map(user => (
		<User
			name={user.name}
			key={user.userId}
			userId={user.userId}
			city={user.location.city}
			country={user.location.country}
			status={user.status}
			avatarUrl={user.avatarUrl}
		/>
	))
	return (
		<div className={st.users}>
			<FindUsersContainer />
			<div className={st.usersList}>{editedUsers}</div>
		</div>
	)
}

// ====================================================
// export

export default Users
