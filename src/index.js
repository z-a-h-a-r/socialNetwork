import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import state, {
	stateCreatePost,
	stateSendMessage,
	updateNewMessageContent,
} from './redux/state'

// ====================================================

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
