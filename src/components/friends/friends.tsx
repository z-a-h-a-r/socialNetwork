// ====================================================
// IMPORTS
// Main
import { useEffect, useState } from 'react'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { AppStateType } from '../../redux/store'
import * as queryString from 'querystring'
import { friendsActions, getFriends } from '../../redux/friendsReducer'
// Styles
import st from './friends.module.scss'
// Components
import Loading from '../common/loading/loading'
import UserContainer from '../common/user/userContainer'
import FriendsForm from './friendsForm/friendsFormContainer'

// ====================================================
// Component

type PropsType = {}

const Friends: FC<PropsType> = props => {
	const dispatch = useDispatch()
	const history = useHistory()

	// ====================================================
	// state

	const friends = useSelector(
		(state: AppStateType) => state.friendsPage.friends
	)
	const isFetchingData = useSelector(
		(state: AppStateType) => state.friendsPage.isFetchingData
	)
	const term = useSelector((state: AppStateType) => state.friendsPage.term)

	// ====================================================
	// dispatch actions

	const _getFriends = (i: number, term: string, willSet: boolean) => {
		dispatch(getFriends(i, term, willSet))
	}

	// ====================================================
	// Side effects

	useEffect(() => {
		const parsedSearch = queryString.parse(
			history.location.search.substr(1)
		) as { term: string }

		let actualTerm = term

		if (parsedSearch.term) {
			actualTerm = parsedSearch.term as string
			dispatch(friendsActions.setTerm(actualTerm))
		}

		_getFriends(1, actualTerm, true)
	}, [])
	useEffect(() => {
		if (!!term) {
			history.push({
				pathname: '/friends',
				search: `term=${term}`,
			})
		} else {
			history.push({
				pathname: '/friends',
			})
		}
	}, [term])

	// ====================================================
	//  Local state

	let [currentPageWithTerm, setCurrentPageWithTerm] = useState(2)
	let [currentPageWithoutTerm, setCurrentPageWithoutTerm] = useState(2)
	let [prevTerm, setPrevTerm] = useState('')

	// ====================================================
	// Functions

	const onBtnClk = () => {
		if (term === '') {
			_getFriends(currentPageWithoutTerm, '', false)
			setCurrentPageWithoutTerm(currentPageWithoutTerm + 1)
			setCurrentPageWithTerm((currentPageWithTerm = 2))
		} else {
			if (prevTerm !== term) {
				setPrevTerm((prevTerm = term))
				setCurrentPageWithTerm((currentPageWithTerm = 2))
			}
			_getFriends(currentPageWithTerm, term, false)
			setCurrentPageWithTerm(currentPageWithTerm + 1)
			setCurrentPageWithoutTerm((currentPageWithoutTerm = 2))
		}
	}

	// ====================================================
	// JSX

	return (
		<div className={st.users}>
			<FriendsForm />
			<div className={st.usersList}>
				{friends.map(user => (
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
				{isFetchingData ? (
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
