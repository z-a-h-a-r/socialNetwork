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
		<React.StrictMode>
			<Provider store={store}>
				<App />
			</Provider>
		</React.StrictMode>,
		document.getElementById('root')
	)
}
rerender()
