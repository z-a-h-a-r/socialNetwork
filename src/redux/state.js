const typeSendMessage = 'SEND-MESSAGE'
const typeCreatePost = 'CREATE-POST'
const typeUpdatePostContent = 'UPDATE-POST-CONTENT'
const typeUpdateMessageContent = 'UPDATE-MESSAGE-CONTENT'

// ====================================================

let store = {
	_state: {
		profilePage: {
			postsData: [
				{ content: 'postsData', sharedCount: 0, commentsCount: 0 },
				{ content: 'postsData', sharedCount: 0, commentsCount: 0 },
			],
			newPostContent: '',
		},
		messangerPage: {
			dialogsLinksData: [
				{ name: 'name - 1', id: 1 },
				{ name: 'name - 2', id: 2 },
				{ name: 'na', id: 3 },
				{ name: 'name - 4', id: 4 },
			],
			messages: [
				{ content: 'messages', id: 1, time: '0:36' },
				{ content: 'messages', id: 1, time: '0:08' },
			],
			newMessageContent: '',
		},
	},
	_callSubscriber() {},

	// ====================================================

	dispatch(action) {
		if (action.type === typeCreatePost) {
			let newPost = {
				content: this._state.profilePage.newPostContent,
				sharedCount: 0,
				commentsCount: 0,
			}
			this._state.profilePage.postsData.push(newPost)
			this._state.profilePage.newPostContent = ''
			this._callSubscriber()
		} else if (action.type === typeSendMessage) {
			let newMessage = {
				content: this._state.messangerPage.newMessageContent,
				id: 7,
				time: '0:58',
			}
			this._state.messangerPage.messages.push(newMessage)
			this._state.messangerPage.newMessageContent = ''
			this._callSubscriber()
		} else if (action.type === typeUpdateMessageContent) {
			this._state.messangerPage.newMessageContent = action.messageContent
			this._callSubscriber()
		} else if (action.type === typeUpdatePostContent) {
			this._state.profilePage.newPostContent = action.postContent
			console.log(this._state.profilePage.newPostContent)
			this._callSubscriber()
		}
	},

	// ====================================================

	getState() {
		return this._state
	},
	subscribe(observer) {
		this._callSubscriber = observer
	},
}

// ====================================================

export const createPostActionCreator = () => ({ type: typeCreatePost })
export const updatePostContentActionCreator = textAreaValue => ({
	type: typeUpdatePostContent,
	postContent: textAreaValue,
})
export const sendMessageActionCreator = () => ({ type: typeSendMessage })
export const updateMessageContentActionCreator = inputValue => ({
	type: typeUpdateMessageContent,
	messageContent: inputValue,
})

// ====================================================

export default store
