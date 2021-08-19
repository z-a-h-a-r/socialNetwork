// ====================================================
// IMPORTS
// Main
import { FC } from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
// Styles
import st from './messagesForm.module.scss'
// Components

// ====================================================
// Component

type PropsType = {}
type loginFormValuesType = {
	newContent: string
}

const MessagesFormWithoutRedux: FC<
	InjectedFormProps<loginFormValuesType> & PropsType
> = props => {
	// ===================================================
	// html
	return (
		<form className={st.form} onSubmit={props.handleSubmit}>
			<Field
				type={'text'}
				placeholder={'type message...'}
				name={'newContent'}
				component={'input'}
				className={st.input}
			/>
			<button className={st.button}>send</button>
		</form>
	)
}

const MessagesForm = reduxForm<loginFormValuesType, PropsType>({
	form: 'messages',
})(MessagesFormWithoutRedux)

// ====================================================
// Exports

export default MessagesForm
