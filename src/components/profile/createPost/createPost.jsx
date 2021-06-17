import st from './createPost.module.scss'
import React from 'react'
// ====================================================

const CreatePost = props => {
	let refTextArea = React.createRef()

	function onButtonClick() {
		let textAreaValue = refTextArea.current.value
		props.stateCreatePost(textAreaValue)
		refTextArea.current.value = ''
	}
	function onEnterClick(e) {
		if (e.keyCode === 13) {
			let textAreaValue = refTextArea.current.value
			props.stateCreatePost(textAreaValue)
			refTextArea.current.value = ''
		}
	}

	// ===================================================

	return (
		<div className={st.createPost}>
			<div className={st.title}>Create new post</div>
			<div className={st.create}>
				<textarea
					ref={refTextArea}
					className={st.textArea}
					name=""
					placeholder="What is up?"
					onKeyDown={onEnterClick}
				></textarea>
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
