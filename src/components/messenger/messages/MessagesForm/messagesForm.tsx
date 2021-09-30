// ====================================================
// IMPORTS
// Main
import { Formik } from 'formik'
import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { sendMessage } from '../../../../redux/messangerReducer'
// Styles
import st from './messagesForm.module.scss'
// Components

// ====================================================
// Component

type PropsType = {}
type searchFormType = {
	message: string
}

const UsersForm: FC<PropsType> = props => {
	const dispatch = useDispatch()

	const submit = (
		values: searchFormType,
		{
			setSubmitting,
			resetForm,
		}: {
			setSubmitting: (setSubmitting: boolean) => void
			resetForm: () => void
		}
	) => {
		dispatch(sendMessage(values.message))
		resetForm()
		setSubmitting(false)
	}

	return (
		<Formik initialValues={{ message: '' }} onSubmit={submit}>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				handleSubmit,
				isSubmitting,
			}) => (
				<form onSubmit={handleSubmit} className={st.form}>
					<input
						type="text"
						name="message"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.message}
						className={st.input}
					/>
					<button disabled={isSubmitting} type="submit" className={st.button}>
						Send
					</button>
				</form>
			)}
		</Formik>
	)
}

// ====================================================
// Exports

export default UsersForm
