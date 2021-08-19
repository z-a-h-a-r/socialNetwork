// ====================================================
// IMPORTS
// Main
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { FC } from 'react'
// Styles
import st from './loginForm.module.scss'
// Components
import { Element } from '../../common/FormsControls/FormsControls'
const Input = Element('input')
// ====================================================
// Component

type PropsType = {
	captchaUrl: string
	error: any
	onSubmit: () => void
	handleSubmit: () => void
}
type loginFormValuesType = {
	email: string
	password: string
	rememberMe: boolean
	captcha: string
}

const LoginFormWithoutRedux: FC<
	InjectedFormProps<loginFormValuesType> & PropsType
> = props => {
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

			{props.captchaUrl && (
				<div>
					<Field
						type={'text'}
						placeholder={'captcha'}
						name={'captcha'}
						component={Input}
					/>
					<img src={props.captchaUrl} className={st.captcha} />
				</div>
			)}
			{props.captchaUrl ? (
				<button style={{ marginTop: '30px' }}>login</button>
			) : (
				<button>login</button>
			)}

			{props.error && <span className={st.span}> {props.error} </span>}
		</form>
	)
}

const LoginForm = reduxForm<loginFormValuesType, PropsType>({
	form: 'login',
})(LoginFormWithoutRedux)

// ====================================================
// Exports

export default LoginForm
