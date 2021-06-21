const typeCreatePost = 'CREATE-POST'
const typeUpdatePostContent = 'UPDATE-POST-CONTENT'

// ====================================================

let initialState = {
	postsData: [
		{ content: 'postsData', sharedCount: 0, commentsCount: 0 },
		{ content: 'postsData', sharedCount: 0, commentsCount: 0 },
	],
	newPostContent: '',
}

// ====================================================

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case typeCreatePost:
			let newPost = {
				content: state.newPostContent,
				sharedCount: 0,
				commentsCount: 0,
			}
			state.postsData.push(newPost)
			state.newPostContent = ''
			return state

		case typeUpdatePostContent:
			state.newPostContent = action.postContent
			return state

		default:
			return state
	}
}

// ====================================================

export const createPostActionCreator = () => ({ type: typeCreatePost })
export const updatePostContentActionCreator = textAreaValue => ({
	type: typeUpdatePostContent,
	postContent: textAreaValue,
})

// ====================================================

export default profileReducer
