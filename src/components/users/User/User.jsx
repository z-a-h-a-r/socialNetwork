// ====================================================
// IMPORTS
// Main
import { useEffect } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getRandomIntInclusive } from './../../../commonFunctions/getRandomIntInclusive'
// Styles
import st from './user.module.scss'
// Components

// ====================================================
// Component

const User = props => {
	useEffect(() => {
		setIndexAvatarBg((indexAvatarBg = getRandomIntInclusive(0, 18)))
	}, [])
	const colorsForAvatars = [
		'#003B46',
		'#5C0DAC',
		'#3A0470',
		'#9F69D6',
		'#080B74',
		'#7375D8',
		'#1A1EB2',
		'#389E28',
		'#52E93A',
		'#7AE969',
		'#9EA400',
		'#B8BE2F',
		'#A67600',
		'#BF9630',
		'#FFB600',
		'#A40004',
		'#FD0006',
		'#65016C',
		'#77207D',
	]
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
}

// ====================================================
// Exports

export default User
