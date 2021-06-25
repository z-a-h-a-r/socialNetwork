import CreatePost from './createPost'
import {
	createPostActionCreator,
	updatePostContentActionCreator,
} from '../../../redux/profileReducer'
import { connect } from 'react-redux'
// ===================================================

let mapStateToProps = state => {
	return {
		newPostContent: state.profilePage.newPostContent,
	}
}
let mapDispatchToProps = dispatch => {
	return {
		createPost: () => {
			dispatch(createPostActionCreator())
		},
		inputChange: textAreaValue => {
			dispatch(updatePostContentActionCreator(textAreaValue))
		},
	}
}
const CreatePostContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CreatePost)

// ===================================================

export default CreatePostContainer
