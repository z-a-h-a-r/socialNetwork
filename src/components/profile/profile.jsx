import st from './Profile.module.scss'

// ====================================================

import Post from './Post/Post'
import CreatePostContainer from './CreatePost/createPostContainer'

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

	return (
		<div className={st.profile}>
			<div className={st.background}></div>

			<div className={st.mainInfo}>
				<div className={st.avatar}></div>
				<p className={st.name}>Tyler, The Creator</p>
				<p className={st.followers}>1.2M followers</p>
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
