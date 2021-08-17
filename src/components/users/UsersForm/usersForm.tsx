// ====================================================
// IMPORTS
// Main
import { FC } from 'react'
import { Field, reduxForm } from 'redux-form'
// Styles
import st from './usersForm.module.scss'
// Components

// ====================================================
// Component

type PropsType = {
	handleSubmit: () => void
}

const UsersFormWithoutRedux: FC<PropsType> = props => {
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

const UsersForm = reduxForm({
	form: 'users',
	// @ts-ignore
})(UsersFormWithoutRedux)

// ====================================================
// Exports

export default UsersForm
