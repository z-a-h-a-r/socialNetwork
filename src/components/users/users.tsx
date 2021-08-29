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
import UsersForm from './usersForm/usersFormContainer'
import Loading from '../common/Loading/Loading'
import UserContainer from '../common/user/userContainer'

// ====================================================
// Component

type PropsType = UsersStateType & UsersDispatchType & UsersOwnType

const Users: FC<PropsType> = props => {
	useEffect(() => {
		props.clearUsers()
		props.getUsers(1)
	}, [])

	let [currentPageWithTerm, setCurrentPageWithTerm] = useState(2)
	let [currentPageWithoutTerm, setCurrentPageWithoutTerm] = useState(2)
	let [prevTerm, setPrevTerm] = useState('')

	const onBtnClk = () => {
		if (props.term === '') {
			props.searchUsers(currentPageWithoutTerm, '', false)
			setCurrentPageWithoutTerm(currentPageWithoutTerm + 1)
			setCurrentPageWithTerm((currentPageWithTerm = 2))
		} else {
			if (prevTerm !== props.term) {
				setPrevTerm((prevTerm = props.term))
				setCurrentPageWithTerm((currentPageWithTerm = 2))
			}
			props.searchUsers(currentPageWithTerm, props.term, false)
			setCurrentPageWithTerm(currentPageWithTerm + 1)
			setCurrentPageWithoutTerm((currentPageWithoutTerm = 2))
		}
	}

	return (
		<div className={st.users}>
			<UsersForm />
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
