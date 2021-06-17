import React from 'react'
import ReactDOM from 'react-dom'

import App from './../App'
// ====================================================

// data
let state = {
	profilePage: {
		postsData: [
			{ content: 'postsData', sharedCount: 0, commentsCount: 0 },
			{ content: 'postsData', sharedCount: 0, commentsCount: 0 },
		],
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
		newMessageContent: '0',
	},
}

// ====================================================
function rerender() {
	ReactDOM.render(
		<React.StrictMode>
			<App
				state={state}
				stateCreatePost={stateCreatePost}
				stateSendMessage={stateSendMessage}
				updateNewMessageContent={updateNewMessageContent}
			/>
		</React.StrictMode>,
		document.getElementById('root')
	)
}

export let stateCreatePost = postContent => {
	let newPost = { content: postContent, sharedCount: 0, commentsCount: 0 }
	state.profilePage.postsData.push(newPost)

	rerender()
}
export let stateSendMessage = () => {
	let newMessage = {
		content: state.messangerPage.newMessageContent,
		id: 7,
		time: '0:58',
	}
	state.messangerPage.messages.push(newMessage)
	state.messangerPage.newMessageContent = ''

	rerender()
}
export let updateNewMessageContent = messageContent => {
	state.messangerPage.newMessageContent = messageContent

	rerender()
}

// ====================================================

export default state
