import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import store from './redux/reduxStore'
import { Provider } from 'react-redux'
// ====================================================

// store.subscribe(rerender)

// ====================================================

function rerender() {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root')
	)
}
rerender()
