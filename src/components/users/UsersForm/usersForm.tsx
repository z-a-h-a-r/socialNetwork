// ====================================================
// IMPORTS
// Main
import { FC } from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
// Styles
import st from './usersForm.module.scss'
// Components

// ====================================================
// Component

type PropsType = {}
type loginFormValuesType = {
	content: string
}

const UsersFormWithoutRedux: FC<
	InjectedFormProps<loginFormValuesType> & PropsType
> = props => {
	return (
		<form className={st.form} onSubmit={props.handleSubmit}>
			<Field
				type={'text'}
				placeholder="find new friends"
				name={'content'}
				component={'input'}
				className={st.input}
			/>
			<button className={st.button}>search</button>
		</form>
	)
}

const UsersForm = reduxForm<loginFormValuesType, PropsType>({
	form: 'users',
})(UsersFormWithoutRedux)

// ====================================================
// Exports

export default UsersForm
