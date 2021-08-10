// ====================================================
// IMPORTS
// Main
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLength, required } from '../../../formsValidators/formsValidators'
// Styles
import st from './CreatePostForm.module.scss'
// Components
import { Element } from '../../common/FormsControls/FormsControls'

const maxLength1 = maxLength(1)
const Textarea = Element('input')
// ====================================================
// Component

const CreatePostWithoutRedux = props => {
	return (
		<form className={st.form} onSubmit={props.handleSubmit}>
			<Field
				placeholder="What is up?"
				name={'content'}
				component={Textarea}
				className={st.input}
				validate={(required, maxLength1)}
			/>

			<button className={st.button}>Add post</button>
		</form>
	)
}

const CreatePost = reduxForm({
	form: 'createPost',
})(CreatePostWithoutRedux)

// ====================================================
// Exports

export default CreatePost
