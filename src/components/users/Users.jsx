// ====================================================
// IMPORTS
// Main
import React, { useEffect, useState } from 'react'
// Styles
import st from './Users.module.scss'
// Components
import UsersForm from './UsersForm/UsersForm'
import Loading from '../common/Loading/Loading'
import UserContainer from './User/userContainer'

// ====================================================
// Component

let i = 1

const Users = props => {
	function onBtnClk() {
		i = i + 1
		props.getUsers(i)
	}
	useEffect(() => {
		props.getUsers(1)
	}, [])
	const onSubmit = formData => {
		console.log(formData)
	}
	return (
		<div className={st.users}>
			<UsersForm onSubmit={onSubmit} />
			<div className={st.usersList}>
				{props.users.map(user => (
					<UserContainer
						name={user.name}
						key={user.id}
						id={user.id}
						city={'user.location.city'}
						country={'user.location.country'}
						status={user.status != null ? user.status : 'status not found'}
						avatarUrl={user.photos.small}
						followed={user.followed}
					/>
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
// Exports

export default Users
