// ====================================================
// IMPORTS
// Main
// Styles
import st from './Alert.module.scss'
// Components

// ====================================================
// Component

//! parametrs:
//? background
//? content
//? textColor

export const Alert = props => {
	return (
		<div className={st.alert} style={{ background: `${props.background}` }}>
			<p style={{ color: `${props.textColor}` }}>{props.content}</p>
		</div>
	)
}

// ====================================================
// Exports
