import st from './content.module.scss'
import Post from './../post/post'
import CreatePost from './../createPost/createPost'

// ====================================================

const Content = () => {
	return (
		<div className={st.content}>
			<div className={st.background}></div>

			<div className={st.mainInfo}>
				<div className={st.avatar}></div>
				<p className={st.name}>Tyler, The Creator</p>
				<p className={st.followers}>1.2M followers</p>
			</div>

			<div className={st.posts}>
				<CreatePost />

				<h1 className={st.title}>Posts</h1>
				<div className={st.list}>
					<Post content={'Hello Props'} sharedCount={0} commentsCount={0} />
					<Post content={'Hello World'} sharedCount={0} commentsCount={0} />
					<Post content={'Hello Props'} sharedCount={0} commentsCount={0} />
					<Post content={'Hello World'} sharedCount={0} commentsCount={0} />
				</div>
			</div>
		</div>
	)
}

// ====================================================
// export

export default Content
