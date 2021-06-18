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
		if (action.type === 'STATE-CREATE-POST') {
			let newPost = {
				content: this._state.profilePage.newPostContent,
				sharedCount: 0,
				commentsCount: 0,
			}
			this._state.profilePage.postsData.push(newPost)
			this._state.profilePage.newPostContent = ''
			this._callSubscriber()
		} else if (action.type === 'STATE-SEND-MESSAGE') {
			let newMessage = {
				content: this._state.messangerPage.newMessageContent,
				id: 7,
				time: '0:58',
			}
			this._state.messangerPage.messages.push(newMessage)
			this._state.messangerPage.newMessageContent = ''
			this._callSubscriber()
		} else if (action.type === 'UPDATE-NEW-MESSAGE-CONTENT') {
			this._state.messangerPage.newMessageContent = action.messageContent
			this._callSubscriber()
		} else if (action.type === 'UPDATE-NEW-POST-CONTENT') {
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

export default store
