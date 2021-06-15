import st from './createPost.module.scss'

// ====================================================

const CreatePost = () => {
	return (
		<div>
			<div className={st.createPost}>
				<div className={st.title}>Add post</div>
			</div>
			<div className={st.textAreaWrapper}>
				<textarea
					className={st.textArea}
					name=""
					placeholder="What is up?"
				></textarea>

				<div className={st.textAreaDecoration}></div>
			</div>
		</div>
	)
}

// ====================================================
// export

export default CreatePost

// ====================================================
// scripts
