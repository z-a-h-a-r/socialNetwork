import st from './createPost.module.scss'
import React from 'react'

import {
	createPostActionCreator,
	updatePostContentActionCreator,
} from './../../../redux/state'
// ====================================================

const CreatePost = props => {
	let refTextArea = React.createRef()

	function onButtonClick() {
		props.dispatch(createPostActionCreator())
	}
	function onEnterClick(e) {
		if (e.keyCode === 13) {
			props.dispatch(createPostActionCreator())
		}
	}
	function onTnputChange() {
		let textAreaValue = refTextArea.current.value
		props.dispatch(updatePostContentActionCreator(textAreaValue))
	}

	// ===================================================

	return (
		<div className={st.createPost}>
			<div className={st.title}>Create new post</div>
			<div className={st.create}>
				<input
					ref={refTextArea}
					className={st.textArea}
					onChange={onTnputChange}
					onKeyDown={onEnterClick}
					placeholder="What is up?"
					value={props.newPostContent}
				/>
				<button className={st.button} onClick={onButtonClick}>
					Add post
				</button>
			</div>
		</div>
	)
}

// ====================================================
// export

export default CreatePost

// ====================================================
// scripts
