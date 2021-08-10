import st from './FormsControls.module.scss'

export const Element =
	Component =>
	({ input, meta, ...props }) => {
		const hasError = meta.error
		return (
			<>
				<Component {...input} {...props} className={st.component} />
			</>
		)
	}
