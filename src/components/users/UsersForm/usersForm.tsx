// ====================================================
// IMPORTS
// Main
import { Formik } from 'formik'
import { FC } from 'react'
// Styles
import st from './usersForm.module.scss'
import {
	UsersFormDispatchType,
	UsersFormOwnType,
	UsersFormStateType,
} from './usersFormContainer'
// Components

// ====================================================
// Component

const usersSearchFormValidate = (values: any) => {
	const errors = {}

	return errors
}

type PropsType = UsersFormStateType & UsersFormDispatchType & UsersFormOwnType
type usersSearchFormType = {
	term: string
}

const UsersForm: FC<PropsType> = props => {
	const submit = (
		values: usersSearchFormType,
		{ setSubmitting }: { setSubmitting: (setSubmitting: boolean) => void }
	) => {
		props.setTerm(values.term)
		props.searchUsers(1, values.term, true)
		setSubmitting(false)
	}
	return (
		<Formik
			initialValues={{ term: '' }}
			validate={usersSearchFormValidate}
			onSubmit={submit}
		>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				handleSubmit,
				isSubmitting,
				/* and other goodies */
			}) => (
				<form onSubmit={handleSubmit} className={st.form}>
					<input
						type="text"
						name="term"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.term}
						className={st.input}
					/>
					{errors.term && touched.term && errors.term}

					<button type="submit" className={st.button} disabled={isSubmitting}>
						Search
					</button>
				</form>
			)}
		</Formik>
	)
}

// ====================================================
// Exports

export default UsersForm
