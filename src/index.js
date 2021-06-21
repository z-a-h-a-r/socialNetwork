import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import store from './redux/reduxStore'

// ====================================================

store.subscribe(rerender)

// ====================================================

function rerender() {
	ReactDOM.render(
		<React.StrictMode>
			<App
				// state={store.getState()}
				// dispatch={store.dispatch.bind(store)}
				store={store}
			/>
		</React.StrictMode>,
		document.getElementById('root')
	)
}
rerender()
