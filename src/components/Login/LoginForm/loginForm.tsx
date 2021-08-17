// ====================================================
// IMPORTS
// Main
import { Field, reduxForm } from 'redux-form'
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

const LoginFormWithoutRedux: FC<PropsType> = props => {
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
			<Field type={'checkBox'} name={'rememberMe'} component={Input} />
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

const LoginForm = reduxForm({
	form: 'login',
	// @ts-ignore
})(LoginFormWithoutRedux)

// ====================================================
// Exports

export default LoginForm
