// ====================================================
// IMPORTS
// Main
import React from 'react'
import ReactDOM from 'react-dom'
import store from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
// Components
import App from './App'

// ====================================================
// Component

function render() {
	ReactDOM.render(
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>,
		document.getElementById('root')
	)
}
render()
