import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import reportWebVitals from './reportWebVitals'

// ====================================================
// data

let postsData = [
	{ content: 'Hello props', sharedCount: 0, commentsCount: 0 },
	{ content: 'Hello BBL', sharedCount: 0, commentsCount: 0 },
	{ content: 'H', sharedCount: 0, commentsCount: 0 },
	{ content: 'Nice', sharedCount: 0, commentsCount: 0 },
	{ content: 'Nice', sharedCount: 0, commentsCount: 0 },
]

let dialogsLinksData = [
	{ name: 'name - 1', id: 1 },
	{ name: 'name - 2', id: 2 },
	{ name: 'na', id: 3 },
	{ name: 'name - 4', id: 4 },
]

let messages = [
	{ content: 'edited', id: 1, time: '0:36' },
	{ content: 'edited', id: 1, time: '0:08' },
]

// ====================================================

ReactDOM.render(
	<React.StrictMode>
		<App
			postsData={postsData}
			dialogsLinksData={dialogsLinksData}
			messages={messages}
		/>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
