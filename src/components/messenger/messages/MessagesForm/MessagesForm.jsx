// ====================================================
// IMPORTS
// Main
import { Field, reduxForm } from 'redux-form'
// Styles
import st from './messagesForm.module.scss'
// Components

// ====================================================
// Component

const MessagesFormWithoutRedux = props => {
	// ===================================================
	// html
	return (
		<form className={st.form} onSubmit={props.handleSubmit}>
			<Field
				type={'text'}
				placeholder={'type message...'}
				name={'content'}
				component={'input'}
				className={st.input}
			/>
			<button className={st.button}>send</button>
		</form>
	)
}

const MessagesForm = reduxForm({
	form: 'messages',
})(MessagesFormWithoutRedux)

// ====================================================
// Exports

export default MessagesForm
