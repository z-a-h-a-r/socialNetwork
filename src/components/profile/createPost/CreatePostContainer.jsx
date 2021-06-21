import React from 'react'
import CreatePost from './createPost'

import {
	createPostActionCreator,
	updatePostContentActionCreator,
} from '../../../redux/profileReducer'
// ====================================================

const CreatePostContainer = props => {
	const store = props.store
	const state = props.store.getState()

	function createPost() {
		store.dispatch(createPostActionCreator())
	}

	function inputChange(textAreaValue) {
		store.dispatch(updatePostContentActionCreator(textAreaValue))
	}

	// ===================================================

	return (
		<CreatePost
			createPost={createPost}
			inputChange={inputChange}
			newPostContent={state.profilePage.newPostContent}
		/>
	)
}

// ====================================================
// export

export default CreatePostContainer

// ====================================================
// scripts
