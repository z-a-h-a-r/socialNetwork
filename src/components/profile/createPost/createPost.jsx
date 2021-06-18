import st from './createPost.module.scss'
import React from 'react'
// ====================================================

const CreatePost = props => {
	let refTextArea = React.createRef()

	function onButtonClick() {
		let textAreaValue = refTextArea.current.value
		props.stateCreatePost(textAreaValue)
	}
	function onEnterClick(e) {
		if (e.keyCode === 13) {
			let textAreaValue = refTextArea.current.value
			props.stateCreatePost(textAreaValue)
		}
	}
	function onTnputChange() {
		let textAreaValue = refTextArea.current.value
		props.updateNewPostContent(textAreaValue)
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
					name=""
					placeholder="What is up?"
					onKeyDown={onEnterClick}
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
