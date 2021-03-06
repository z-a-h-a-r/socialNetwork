// ====================================================
// IMPORTS
// Main
// Styles
import { FC } from 'react'
import st from './post.module.scss'
// Components

// ====================================================
// Component

type PropsType = {
	content: string
	sharedCount: number
	commentsCount: number
	postId: number
	isMyProfile: boolean
	deletePost: (postId: number) => void
}

const Post: FC<PropsType> = props => {
	return (
		<div className={st.item}>
			<div className={st.header}>
				<div className={st.logo}></div>
				<div className={st.name}>Tyler</div>
				<div className={st.time}>ago</div>
			</div>
			<div className={st.content}>
				<div className={st.shadow}></div>
				<p>{props.content}</p>
			</div>
			<div className={st.footer}>
				{props.isMyProfile && (
					<p
						className={st.delete}
						onClick={() => {
							props.deletePost(props.postId)
						}}
					>
						delete
					</p>
				)}

				<div className={st.info}>
					<div className={st.comments}>{props.commentsCount} comments</div>
					<div className={st.shared}>{props.sharedCount} shared</div>
				</div>
			</div>
		</div>
	)
}

// ====================================================
// Exports

export default Post
