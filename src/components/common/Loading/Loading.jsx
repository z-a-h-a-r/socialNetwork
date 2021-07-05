import st from './Loading.module.scss'

// ====================================================

// ====================================================
function Loading(props) {
	return (
		<div className={st.preloader}>
			<div className={st.spinner}></div>
		</div>
	)
}

// ====================================================
// export

export default Loading
