import React from 'react'
import st from './FindUser.module.scss'

// ====================================================

const FindUsers = props => {
	let refInput = React.createRef()

	const onButtonClick = () => {
		if (refInput.current.value !== '') {
			// props.sendMessage()
		}
	}
	const onEnterClick = e => {
		if ((e.keyCode === 13) & (refInput.current.value !== '')) {
			// props.sendMessage()
		}
	}
	const onInputChange = () => {
		let inputValue = refInput.current.value
		// props.inputChange(inputValue)
	}

	return (
		<div className={st.findUsers}>
			<input
				className={st.input}
				onChange={onInputChange}
				onKeyDown={onEnterClick}
				type="text"
				ref={refInput}
				value={props.newMessageContent}
				placeholder="find new friends"
			/>
			<button className={st.button} onClick={onButtonClick}>
				search
			</button>
		</div>
	)
}

// ====================================================
// export

export default FindUsers
