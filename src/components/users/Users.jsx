import st from './Users.module.scss'

// ====================================================

import FindUsersContainer from './FindUser/findUserContainer'
import User from './User/User'
import React, { useState } from 'react'
import Loading from '../common/Loading/Loading'
import { NavLink } from 'react-router-dom'

let i = 1

// ====================================================
const Users = props => {
	function onBtnClk() {
		i = i + 1
		props.getUsers(i, true)
	}
	useState(() => {
		props.getUsers(1, true)
	})
	return (
		<div className={st.users}>
			<FindUsersContainer />
			<div className={st.usersList}>
				{props.users.map(user => (
					<NavLink to={`/profile/${user.id}`}>
						<User
							name={user.name}
							key={user.userId}
							userId={user.userId}
							city={'user.location.city'}
							country={'user.location.country'}
							status={user.status != null ? user.status : 'status not found'}
							avatarUrl={
								user.photos.small != null
									? user.photos.small
									: 'https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80'
							}
							followed={user.followed}
						/>
					</NavLink>
				))}
			</div>
			<div className={st.buttonWrapper}>
				{props.isFetchingData ? (
					<Loading />
				) : (
					<button onClick={onBtnClk} className={st.button}>
						Show more
					</button>
				)}
			</div>
		</div>
	)
}

// ====================================================
// export

export default Users
