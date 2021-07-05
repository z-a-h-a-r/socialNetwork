import { NavLink } from 'react-router-dom'
import st from './User.module.scss'

// ====================================================

const User = props => {
	const onButtonClick = () => {
		if (props.followed === false) {
			props.follow()
		} else {
			props.unFollow()
		}
	}
	return (
		<div className={st.user}>
			<div className={st.avatarWrapper}>
				<img src={props.avatarUrl} alt="" className={st.avatar} />
			</div>

			<div className={st.information}>
				<p className={st.name}>{props.name}</p>
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
				<button onClick={onButtonClick}>
					{props.followed === false ? 'follow' : 'unfollow'}
				</button>
			</div>
		</div>
	)
}

// ====================================================
// export

export default User
