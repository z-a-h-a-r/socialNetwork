import st from './Profile.module.scss'

// ====================================================

import Post from './Post/Post'
import CreatePostContainer from './CreatePost/createPostContainer'
import { useState } from 'react'

// ====================================================

const Profile = props => {
	// ====================================================
	// edited data

	let editedPostsData = props.toEdit.map(p => (
		<Post
			content={p.content}
			sharedCount={p.sharedCount}
			commentsCount={p.commentsCount}
		/>
	))
	useState(() => {
		if (!props.match.params.userId) {
			props.match.params.userId = 2
		}
		props.getInf(props.match.params.userId)
	})

	return (
		<div className={st.profile}>
			<div className={st.background}></div>

			<div className={st.mainInfo}>
				<img
					className={st.avatar}
					src={
						props.largePhoto != null
							? props.largePhoto
							: 'https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80'
					}
				></img>
				<p className={st.name}>
					{props.fullName != null ? props.fullName : 'Name not found'}
				</p>
				<p className={st.followers}>
					{props.aboutMe != null ? props.aboutMe : 'Status not found'}
				</p>
				<div className={st.otherInfo}></div>
			</div>

			<div className={st.posts}>
				<CreatePostContainer />

				<h1 className={st.title}>Posts</h1>
				<div className={st.list}>{editedPostsData}</div>
			</div>
		</div>
	)
}

// ====================================================
// export

export default Profile
