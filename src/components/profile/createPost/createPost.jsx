import st from './CreatePost.module.scss'
import React from 'react'

// ====================================================

const CreatePost = props => {
	let refTextArea = React.createRef()

	function onButtonClick() {
		props.createPost()
	}
	function onEnterClick(e) {
		if (e.keyCode === 13) {
			props.createPost()
		}
	}
	function onTnputChange() {
		let textAreaValue = refTextArea.current.value
		props.inputChange(textAreaValue)
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
