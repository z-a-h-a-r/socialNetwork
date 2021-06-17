import st from './profile.module.scss'

// ====================================================

import Post from './post/post'
import CreatePost from './createPost/createPost'

// ====================================================

const Profile = props => {
	// ====================================================
	// edited data

	let editedPostsData = props.state.postsData.map(p => (
		<Post
			content={p.content}
			sharedCount={p.sharedCount}
			commentsCount={p.commentsCount}
		/>
	))

	return (
		<div className={st.profile}>
			<div className={st.background}></div>

			<div className={st.mainInfo}>
				<div className={st.avatar}></div>
				<p className={st.name}>Tyler, The Creator</p>
				<p className={st.followers}>1.2M followers</p>
			</div>

			<div className={st.posts}>
				<CreatePost stateCreatePost={props.stateCreatePost} />

				<h1 className={st.title}>Posts</h1>
				<div className={st.list}>{editedPostsData}</div>
			</div>
		</div>
	)
}

// ====================================================
// export

export default Profile
