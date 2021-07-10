// ====================================================
// IMPORTS
// Main
import axios from 'axios'
import { NavLink } from 'react-router-dom'
// Styles
import st from './User.module.scss'
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
						onClick={() => {
							axios
								.delete(
									`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
									{
										withCredentials: true,
										headers: {
											'API-KEY': '71572937-80ec-4dde-adb1-d4b106a7cc21',
										},
									}
								)
								.then(response => {
									if (response.data.resultCode === 0) {
										props.unFollow(props.id)
									}
								})
						}}
					>
						unfollow
					</button>
				) : (
					<button
						onClick={() => {
							axios
								.post(
									`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
									{},
									{
										withCredentials: true,
										headers: {
											'API-KEY': '71572937-80ec-4dde-adb1-d4b106a7cc21',
										},
									}
								)

								.then(response => {
									console.log('from axios')
									console.log(response)
									// if (response.resultCode === 0) {
									props.follow(props.id)
									// }
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
