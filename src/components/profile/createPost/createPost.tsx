// ====================================================
// IMPORTS
// Main
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLength, required } from '../../../formsValidators/formsValidators'
import { FC } from 'react'
// Styles
import st from './createPost.module.scss'
// Components
import { Element } from '../../common/FormsControls/FormsControls'

const maxLength1 = maxLength(100)
const Textarea = Element('input')

// ====================================================
// Component

type PropsType = {
	handleSubmit: () => void
}

const CreatePostWithoutRedux: FC<PropsType> = props => {
	return (
		<form className={st.form} onSubmit={props.handleSubmit}>
			<Field
				placeholder="What is up?"
				name={'content'}
				component={Textarea}
				className={st.input}
				// @ts-ignore
				validate={(required, maxLength1)}
			/>

			<button className={st.button}>Add post</button>
		</form>
	)
}

const CreatePost = reduxForm({
	form: 'createPost',
	// @ts-ignore
})(CreatePostWithoutRedux)

// ====================================================
// Exports

export default CreatePost
