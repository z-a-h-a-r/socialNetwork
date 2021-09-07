// ====================================================
// IMPORTS
// Main
import { useEffect, useState } from 'react'
import { FC } from 'react'
import {
	FriendsStateType,
	FriendsOwnType,
	FriendsDispatchType,
} from './friendsContainer'
// Styles
import st from './friends.module.scss'
// Components
import Loading from '../common/loading/loading'
import UserContainer from '../common/user/userContainer'
import FriendsForm from './friendsForm/friendsFormContainer'

// ====================================================
// Component

type PropsType = FriendsStateType & FriendsOwnType & FriendsDispatchType

const Friends: FC<PropsType> = props => {
	useEffect(() => {
		props.clearFriends()
		props.getFriends(1)
	}, [])

	let [currentPageWithTerm, setCurrentPageWithTerm] = useState(2)
	let [currentPageWithoutTerm, setCurrentPageWithoutTerm] = useState(2)
	let [prevTerm, setPrevTerm] = useState('')

	const onBtnClk = () => {
		if (props.term === '') {
			props.searchFriends(currentPageWithoutTerm, '', false)
			setCurrentPageWithoutTerm(currentPageWithoutTerm + 1)
			setCurrentPageWithTerm((currentPageWithTerm = 2))
		} else {
			if (prevTerm !== props.term) {
				setPrevTerm((prevTerm = props.term))
				setCurrentPageWithTerm((currentPageWithTerm = 2))
			}
			props.searchFriends(currentPageWithTerm, props.term, false)
			setCurrentPageWithTerm(currentPageWithTerm + 1)
			setCurrentPageWithoutTerm((currentPageWithoutTerm = 2))
		}
	}

	return (
		<div className={st.users}>
			<FriendsForm />
			<div className={st.usersList}>
				{props.friends.map(user => (
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

export default Friends
