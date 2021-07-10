// ====================================================
// IMPORTS
// Main
import { NavLink } from 'react-router-dom'
// Styles
import st from './User.module.scss'
// DAL
import { followAPI, unfollowAPI } from '../../../api/api'
// Components

// ====================================================
// Component

const User = props => {
	return (
		<div className={st.user}>
			<div className={st.avatarWrapper}>
				<NavLink to={`/profile/${props.id}`}>
					<img src={props.avatarUrl} alt="" className={st.avatar} />
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
							props.setFollowingIsFetching(true, props.id)
							unfollowAPI(props.id).then(data => {
								if (data.resultCode === 0) {
									props.unFollow(props.id)
								}
								props.setFollowingIsFetching(false, props.id)
							})
						}}
					>
						unfollow
					</button>
				) : (
					<button
						disabled={props.followingIsFetching.some(id => id === props.id)}
						onClick={() => {
							props.setFollowingIsFetching(true, props.id)
							followAPI(props.id).then(data => {
								if (data.resultCode === 0) {
									props.follow(props.id)
								}
								props.setFollowingIsFetching(false, props.id)
							})
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
