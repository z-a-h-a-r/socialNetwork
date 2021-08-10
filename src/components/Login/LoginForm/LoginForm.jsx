// ====================================================
// IMPORTS
// Main
import { Field, reduxForm } from 'redux-form'
// Styles
import st from './LoginForm.module.scss'
// Components
import { Element } from './../../common/FormsControls/FormsControls'
const Input = Element('input')
// ====================================================
// Component

const LoginFormWithoutRedux = props => {
	return (
		<form className={st.form} onSubmit={props.handleSubmit}>
			<Field
				type={'email'}
				placeholder={'email'}
				name={'email'}
				component={Input}
			/>
			<Field
				type={'password'}
				placeholder={'password'}
				name={'password'}
				component={Input}
			/>
			<button>login</button>
			{props.error && <span className={st.span}> {props.error} </span>}
		</form>
	)
}

const LoginForm = reduxForm({
	form: 'login',
})(LoginFormWithoutRedux)
// ====================================================
// Exports

export default LoginForm
