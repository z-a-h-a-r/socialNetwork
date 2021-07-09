import CreatePost from './CreatePost'
import { createPost, updatePostContent } from '../../../redux/profileReducer'
import { connect } from 'react-redux'
// ===================================================

let mapStateToProps = state => {
	return {
		newPostContent: state.profilePage.newPostContent,
	}
}

const CreatePostContainer = connect(mapStateToProps, {
	createPost,
	updatePostContent,
})(CreatePost)

// ===================================================

export default CreatePostContainer
