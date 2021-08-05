// ====================================================
// IMPORTS
// Main
import React from 'react'
// Styles
import st from './CreatePost.module.scss'
// Components

// ====================================================
// Component

const CreatePost = props => {
	let refTextArea = React.createRef()

	function onButtonClick(e) {
		if (refTextArea.current.value !== '') {
			props.createPost()
		}
	}
	function onEnterClick(e) {
		if ((e.keyCode === 13) & (refTextArea.current.value !== '')) {
			props.createPost()
		}
	}
	function onTnputChange() {
		let textAreaValue = refTextArea.current.value
		props.updatePostContent(textAreaValue)
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
// Exports

export default CreatePost
