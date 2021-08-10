// ====================================================
// IMPORTS
// Main
// Styles
import { Redirect } from 'react-router-dom'
import st from './Login.module.scss'
// Components
import LoginForm from './LoginForm/LoginForm'

// ====================================================
// Component
const Login = props => {
	const onSubmit = formData => {
		props.login(formData.email, formData.password, true)
	}
	if (props.isAuth) {
		return <Redirect to={'/profile'} />
	}
	return (
		<section className={st.login}>
			<h2>Login</h2>
			<div className={st.form}>
				<LoginForm onSubmit={onSubmit} />
			</div>
		</section>
	)
}
// ====================================================
// Exports

export default Login
