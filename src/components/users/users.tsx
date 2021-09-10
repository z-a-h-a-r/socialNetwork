// ====================================================
// IMPORTS
// Main
import { useEffect, useState } from 'react'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from '../../redux/store'
import { getUsers, usersActions } from '../../redux/usersReducer'
import { useHistory } from 'react-router'
import * as queryString from 'querystring'
// Styles
import st from './users.module.scss'
// Components
import UsersForm from './usersForm/usersFormContainer'
import Loading from '../common/loading/loading'
import UserContainer from '../common/user/userContainer'

// ====================================================
// Component

type PropsType = {}

const Users: FC<PropsType> = props => {
	const dispatch = useDispatch()
	const history = useHistory()

	// ====================================================
	// state

	const users = useSelector((state: AppStateType) => state.userPage.users)
	const isFetchingData = useSelector(
		(state: AppStateType) => state.userPage.isFetchingData
	)
	const term = useSelector((state: AppStateType) => state.userPage.term)

	// ====================================================
	// dispatch

	const _getUsers = (i: number, term: string, willSet: boolean) => {
		dispatch(getUsers(i, term, willSet))
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
			dispatch(usersActions.setTerm(actualTerm))
		}

		_getUsers(1, actualTerm, true)
	}, [])
	useEffect(() => {
		if (!!term) {
			history.push({
				pathname: '/users',
				search: `term=${term}`,
			})
		} else {
			history.push({
				pathname: '/users',
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
			_getUsers(currentPageWithoutTerm, '', false)
			setCurrentPageWithoutTerm(currentPageWithoutTerm + 1)
			setCurrentPageWithTerm((currentPageWithTerm = 2))
		} else {
			if (prevTerm !== term) {
				setPrevTerm((prevTerm = term))
				setCurrentPageWithTerm((currentPageWithTerm = 2))
			}
			_getUsers(currentPageWithTerm, term, false)
			setCurrentPageWithTerm(currentPageWithTerm + 1)
			setCurrentPageWithoutTerm((currentPageWithoutTerm = 2))
		}
	}

	// ====================================================
	// JSX

	return (
		<div className={st.users}>
			<UsersForm />
			<div className={st.usersList}>
				{users.map(user => (
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

export default Users
