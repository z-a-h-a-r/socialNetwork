// ====================================================
// IMPORTS
// Main
// Styles
import { FC, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import st from './login.module.scss'
import {
	LoginDispatchType,
	LoginOwnType,
	LoginStateType,
} from './loginContainer'
// Components
import LoginForm from './loginForm/loginForm'

// ====================================================
// Component

type PropsType = LoginStateType & LoginDispatchType & LoginOwnType

const Login: FC<PropsType> = props => {
	const onSubmit = (formData: any) => {
		console.log(formData)

		props.login(formData.email, formData.password, true, formData.captcha)
	}
	if (props.isAuth) {
		return <Redirect to={'/profile'} />
	}
	return (
		<section className={st.login}>
			<h2>Login</h2>
			<div className={st.form}>
				{/* @ts-ignore */}
				<LoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
			</div>
		</section>
	)
}
// ====================================================
// Exports

export default Login
