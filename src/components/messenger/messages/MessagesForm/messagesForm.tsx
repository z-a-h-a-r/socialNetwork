// ====================================================
// IMPORTS
// Main
import { FC } from 'react'
import { Field, reduxForm } from 'redux-form'
// Styles
import st from './messagesForm.module.scss'
// Components

// ====================================================
// Component

type PropsType = {
	handleSubmit: () => void
}

const MessagesFormWithoutRedux: FC<PropsType> = props => {
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
	// @ts-ignore
})(MessagesFormWithoutRedux)

// ====================================================
// Exports

export default MessagesForm
