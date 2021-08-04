// ====================================================
// IMPORTS
// Main

// Styles
import st from './Login.module.scss'
// Components

// ====================================================
// Component
const Login = () => {
	return (
		<section className={st.login}>
			<h2>Login</h2>
			<div className={st.form}>
				<input type="email" placeholder="email" />
				<input type="password" placeholder="password" />
				<button>login</button>
			</div>
		</section>
	)
}
// ====================================================
// Exports

export default Login
