import st from './createPost.module.scss'
import React from 'react'
// ====================================================

const CreatePost = props => {
	let refTextArea = React.createRef()

	function onButtonClick() {
		props.dispatch({ type: 'STATE-CREATE-POST' })
	}
	function onEnterClick(e) {
		if (e.keyCode === 13) {
			props.dispatch({ type: 'STATE-CREATE-POST' })
		}
	}
	function onTnputChange() {
		let textAreaValue = refTextArea.current.value
		props.dispatch({
			type: 'UPDATE-NEW-POST-CONTENT',
			postContent: textAreaValue,
		})
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
