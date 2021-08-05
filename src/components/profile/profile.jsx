// ====================================================
// IMPORTS
// Main
import { useEffect } from 'react'
import { useState } from 'react'
// Styles
import st from './Profile.module.scss'
// Components
import Post from './Post/Post'
import CreatePostContainer from './CreatePost/createPostContainer'

// ====================================================
// Component

const Profile = props => {
	// ====================================================
	// Local state
	let [editMode, setEditMode] = useState(false)
	let [inputValue, setInputValue] = useState('')

	// ====================================================
	// Hooks
	useEffect(() => {
		if (!props.match.params.userId) {
			props.getInf(props.userId)
		} else {
			props.getInf(props.match.params.userId)
		}

		// ====================================================

		props.getStatus(props.userId)
	}, [])

	// ====================================================
	// Functions

	function onInputBlur() {
		props.updateStatus(inputValue, props.userId)
		setEditMode((editMode = false))
	}
	function onInputChange(e) {
		setInputValue(e.currentTarget.value)
	}

	// ====================================================
	// JSX
	return (
		<div className={st.profile}>
			<div className={st.background}></div>

			<div className={st.mainInfo}>
				<img
					className={st.avatar}
					src={
						props.largePhoto != null
							? props.largePhoto
							: 'https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80'
					}
				></img>
				<p className={st.name}>
					{props.fullName != null ? props.fullName : 'Name not found'}
				</p>
				<div className={st.status}>
					{!editMode && (
						<p
							className={st.status__text}
							onDoubleClick={() => {
								setEditMode((editMode = true))
								setInputValue((inputValue = props.aboutMe))
							}}
						>
							{props.aboutMe || 'status not found'}
						</p>
					)}
					{editMode && (
						<input
							type="text"
							placeholder="type new status..."
							value={inputValue}
							onChange={onInputChange}
							onBlur={onInputBlur}
						/>
					)}
				</div>
				<div className={st.otherInfo}></div>
			</div>

			<div className={st.posts}>
				<CreatePostContainer />

				<h1 className={st.title}>Posts</h1>
				<div className={st.list}>
					{props.toEdit.map(p => (
						<Post
							content={p.content}
							sharedCount={p.sharedCount}
							commentsCount={p.commentsCount}
							key={Date.now}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

// ====================================================
// Exports

export default Profile
