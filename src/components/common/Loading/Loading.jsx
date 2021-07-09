// ====================================================
// IMPORTS
// Styles

import st from './Loading.module.scss'

// ====================================================
// Component

function Loading(props) {
	return (
		<div className={st.preloader}>
			<div className={st.spinner}></div>
		</div>
	)
}

// ====================================================
// Exports

export default Loading
