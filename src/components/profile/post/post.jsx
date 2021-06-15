import st from './post.module.scss'

// ====================================================

const Post = props => {
	return (
		<div className={st.item}>
			<div className={st.header}>
				<div className={st.logo}></div>
				<div className={st.name}>Tyler</div>
				<div className={st.time}>ago</div>
			</div>
			<p className={st.content}>{props.content}</p>
			<div className={st.footer}>
				<div className={st.like}></div>
				<div className={st.comments}>{props.commentsCount} comments</div>
				<div className={st.shared}>{props.sharedCount} shared</div>
			</div>
		</div>
	)
}

// ====================================================
// export

export default Post
