// ====================================================
// IMPORTS
// Main
import { useEffect, useState } from 'react'
import { FC } from 'react'
import {
	UsersDispatchType,
	UsersOwnType,
	UsersStateType,
} from './usersContainer'
// Styles
import st from './users.module.scss'
// Components
import UsersForm from './usersForm/usersForm'
import Loading from '../common/Loading/Loading'
import UserContainer from './user/userContainer'

// ====================================================
// Component

type PropsType = UsersStateType & UsersDispatchType & UsersOwnType

const Users: FC<PropsType> = props => {
	useEffect(() => {
		props.getUsers(1)
	}, [])

	let [nextCurrnetPage, setNextCurrnetPage] = useState(2)

	const onBtnClk = () => {
		props.getUsers(nextCurrnetPage)
		setNextCurrnetPage(nextCurrnetPage + 1)
	}
	const onSubmit = (formData: any) => {
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
