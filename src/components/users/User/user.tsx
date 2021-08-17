// ====================================================
// IMPORTS
// Main
import React, { useEffect, useState, FC } from 'react'
import { NavLink } from 'react-router-dom'
import { colorsForAvatars } from '../../../variables/colorsForAvatar.js'
import { getRandomIntInclusive } from '../../../functions/getRandomIntInclusive'
import {
	UserDispatchType,
	UserOwnType,
	UserStateType,
} from './userContainer.js'
// Styles
import st from './user.module.scss'
// Components

// ====================================================
// Component

type PropsType = UserStateType & UserDispatchType & UserOwnType

const User: FC<PropsType> = React.memo(props => {
	useEffect(() => {
		setIndexAvatarBg((indexAvatarBg = getRandomIntInclusive(0, 18)))
	}, [])
	let [indexAvatarBg, setIndexAvatarBg] = useState(1)

	return (
		<div className={st.user}>
			<div className={st.avatarWrapper}>
				<NavLink to={`/profile/${props.id}`}>
					{props.avatarUrl && (
						<img src={props.avatarUrl} alt="" className={st.avatarImage} />
					)}
					{!props.avatarUrl && (
						<div
							className={st.avatarDiv}
							style={{
								background: `${colorsForAvatars[indexAvatarBg]}`,
							}}
						>
							{props.name.substr(0, 1).toUpperCase()}
						</div>
					)}
				</NavLink>
			</div>

			<div className={st.information}>
				<NavLink to={`/profile/${props.id}`}>
					<p className={st.name}>{props.name}</p>
				</NavLink>
				<p className={st.status}>{props.status}</p>
				<NavLink
					exact
					to="/messenger/1"
					className={st.link}
					activeClassName={st.active}
				>
					Send Message
				</NavLink>
			</div>

			<div className={st.location}>
				<div>
					<p>{props.city}</p>
					<p>{props.country}</p>
				</div>
				{props.followed ? (
					<button
						disabled={props.followingIsFetching.some(id => id === props.id)}
						onClick={() => {
							props.toggleFollowState(props.id, false)
						}}
					>
						unfollow
					</button>
				) : (
					<button
						disabled={props.followingIsFetching.some(id => id === props.id)}
						onClick={() => {
							props.toggleFollowState(props.id, true)
						}}
					>
						follow
					</button>
				)}
			</div>
		</div>
	)
})

// ====================================================
// Exports

export default User
