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
		case typeCreatePost: {
			return {
				...state,
				postsData: [
					...state.postsData,
					{
						content: state.newPostContent,
						sharedCount: 0,
						commentsCount: 0,
					},
				],
				newPostContent: '',
			}
		}
		case typeUpdatePostContent: {
			return {
				...state,
				newPostContent: action.postContent,
			}
		}
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
