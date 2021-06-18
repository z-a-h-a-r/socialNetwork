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
	getState() {
		return this._state
	},

	// ====================================================

	stateCreatePost(postContent) {
		let newPost = { content: postContent, sharedCount: 0, commentsCount: 0 }

		this._state.profilePage.postsData.push(newPost)
		this._state.profilePage.newPostContent = ''

		this.callSubscriber()
	},
	stateSendMessage() {
		let newMessage = {
			content: this._state.messangerPage.newMessageContent,
			id: 7,
			time: '0:58',
		}
		this._state.messangerPage.messages.push(newMessage)
		this._state.messangerPage.newMessageContent = ''

		this.callSubscriber()
	},
	updateNewMessageContent(messageContent) {
		this._state.messangerPage.newMessageContent = messageContent

		this.callSubscriber()
	},
	updateNewPostContent(postContent) {
		this._state.profilePage.newPostContent = postContent
		this.callSubscriber()
	},
	// ====================================================

	callSubscriber() {},
	subscribe(observer) {
		this.callSubscriber = observer
	},
}

// ====================================================

export default store
