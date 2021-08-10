// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
// Components
import CreatePost from './createPost'
// Reducers
import { createPost, updatePostContent } from '../../../redux/profileReducer'

// ====================================================
// MSTP & MDTP

let mapStateToProps = state => ({
	newPostContent: state.profilePage.newPostContent,
})

// ====================================================
// Connect & withRouter

const CreatePostContainer = connect(mapStateToProps, {
	createPost,
	updatePostContent,
})(CreatePost)

// ====================================================
// Exports

export default CreatePostContainer
