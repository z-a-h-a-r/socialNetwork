// ====================================================
// IMPORTS
// Main
import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
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

type PropsType = {}
type loginFormValuesType = {
	newContent: string
}

const CreatePostWithoutRedux: FC<
	InjectedFormProps<loginFormValuesType> & PropsType
> = props => {
	return (
		<form className={st.form} onSubmit={props.handleSubmit}>
			<Field
				placeholder="What is up?"
				name={'newContent'}
				component={Textarea}
				className={st.input}
				// @ts-ignore
				validate={(required, maxLength1)}
			/>

			<button className={st.button}>Add post</button>
		</form>
	)
}

const CreatePost = reduxForm<loginFormValuesType, PropsType>({
	form: 'createPost',
})(CreatePostWithoutRedux)

// ====================================================
// Exports

export default CreatePost
