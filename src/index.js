import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import store from './redux/state'

// ====================================================

store.subscribe(rerender)

// ====================================================

function rerender() {
	ReactDOM.render(
		<React.StrictMode>
			<App
				state={store.getState()}
				stateCreatePost={store.stateCreatePost.bind(store)}
				stateSendMessage={store.stateSendMessage.bind(store)}
				updateNewMessageContent={store.updateNewMessageContent.bind(store)}
				updateNewPostContent={store.updateNewPostContent.bind(store)}
			/>
		</React.StrictMode>,
		document.getElementById('root')
	)
}
rerender()
