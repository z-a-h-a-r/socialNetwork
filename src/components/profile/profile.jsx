// ====================================================
// IMPORTS
// Main
import React, { useEffect } from 'react'
import { useState } from 'react'
// Styles
import st from './profile.module.scss'
// Components
import Post from './post/post'
import CreatePost from './createPost/createPost'

// ====================================================
// Component

const Profile = props => {
	// ====================================================
	// Local state
	let [editMode, setEditMode] = useState(false)
	let [inputValue, setInputValue] = useState('')
	let [isMyProfile, setIsMyProfile] = useState(false)

	// ====================================================
	// Hooks
	useEffect(() => {
		if (props.match.params.userId) {
			setIsMyProfile((isMyProfile = false))
			console.log(isMyProfile)
		} else {
			setIsMyProfile((isMyProfile = true))
			console.log(isMyProfile)
		}
		// ====================================================

		function getInfInUseEffect(func) {
			if (!props.match.params.userId) {
				props.getInf(props.userId)
				func()
			} else {
				props.getInf(props.match.params.userId)
			}
		}
		// ====================================================

		function getStatusInUseEffect() {
			props.getStatus(props.userId)
		}
		// ====================================================

		getInfInUseEffect(getStatusInUseEffect)
	}, [])

	// ====================================================
	// Functions

	function onInputBlur() {
		props.updateStatus(inputValue)
		setEditMode((editMode = false))
	}
	function onInputChange(e) {
		setInputValue(e.currentTarget.value)
	}
	const onSubmit = formData => {
		props.createPost(formData)
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
					{isMyProfile && !editMode && (
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
					{!isMyProfile && <p>{props.aboutMe || 'status not found'}</p>}
				</div>
				<div className={st.otherInfo}></div>
			</div>

			<div className={st.posts}>
				{isMyProfile && (
					<div className={st.createPost}>
						<div className={st.formTitle}>Create new post</div>

						<CreatePost onSubmit={onSubmit} />
					</div>
				)}

				{isMyProfile && (
					<h1 className={st.title} style={{ marginTop: '60px' }}>
						Posts
					</h1>
				)}
				{!isMyProfile && <h1 className={st.title}>Posts</h1>}
				<div className={st.list}>
					{props.postsData.map(p => (
						<Post
							content={p.content}
							sharedCount={p.sharedCount}
							commentsCount={p.commentsCount}
							key={p.postId}
							postId={p.postId}
							deletePost={props.deletePost}
							isMyProfile={isMyProfile}
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
