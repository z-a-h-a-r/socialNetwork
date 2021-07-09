// ====================================================
// IMPORTS
// Main
import React from 'react'
import ReactDOM from 'react-dom'
import store from './redux/reduxStore'
import { Provider } from 'react-redux'
// Components
import App from './App'

// ====================================================
// Component

function rerender() {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root')
	)
}
rerender()
