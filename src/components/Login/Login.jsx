// ====================================================
// IMPORTS
// Main
// Styles
import { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import st from './login.module.scss'
// Components
import LoginForm from './loginForm/loginForm'

// ====================================================
// Component
const Login = props => {
	const onSubmit = formData => {
		props.login(formData.email, formData.password, true, formData.captcha)
	}
	if (props.isAuth) {
		return <Redirect to={'/profile'} />
	}
	return (
		<section className={st.login}>
			<h2>Login</h2>
			<div className={st.form}>
				<LoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
			</div>
		</section>
	)
}
// ====================================================
// Exports

export default Login
