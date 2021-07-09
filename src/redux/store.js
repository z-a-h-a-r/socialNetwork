import profileReducer from './profileReducer'
import messangerReducer from './messangerReducer'

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
		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.messangerReducer = messangerReducer(
			this._state.messangerPage,
			action
		)
		this._callSubscriber()
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
window.store = store
export default store
