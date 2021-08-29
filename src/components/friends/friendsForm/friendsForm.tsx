// ====================================================
// IMPORTS
// Main
import { Formik } from 'formik'
import { useState } from 'react'
import { FC } from 'react'
import {
	FriendsFormStateType,
	FriendsFormDispatchType,
	FriendsFormOwnType,
} from './friendsFormContainer'
// Styles
import st from './friendsForm.module.scss'
// Components

// ====================================================
// Component

const usersSearchFormValidate = (values: any) => {
	const errors = {}

	return errors
}
type usersSearchFormType = {
	term: string
}
type PropsType = FriendsFormStateType &
	FriendsFormDispatchType &
	FriendsFormOwnType

const FriendsForm: FC<PropsType> = props => {
	const submit = (
		values: usersSearchFormType,
		{ setSubmitting }: { setSubmitting: (setSubmitting: boolean) => void }
	) => {
		props.setTerm(values.term)
		props.searchFriends(1, values.term, true)
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

export default FriendsForm
