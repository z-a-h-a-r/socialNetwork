// ====================================================
// IMPORTS
// Main
import React, { useEffect } from 'react'
import { useState } from 'react'
import { FC } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { AppStateType } from '../../redux/store'
import {
	createPost,
	deletePost,
	getInf,
	getStatus,
	updateStatus,
} from '../../redux/profileReducer'
// Styles
import st from './profile.module.scss'
// Components
import Post from './post/post'
import CreatePost from './createPost/createPost'
import AvatarContainer from './avatar/avatarContainer'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { postType } from '../../types/types'

// ====================================================
// Component

type PropsType = { match: any }

const Profile: FC<PropsType> = props => {
	const dispatch = useDispatch()

	// ====================================================
	// state

	const postsData = useSelector(
		(state: AppStateType): any => state.profilePage.postsData
	)
	const aboutMe = useSelector(
		(state: AppStateType): any => state.profilePage.profile.aboutMe
	)
	const fullName = useSelector(
		(state: AppStateType) => state.profilePage.profile.fullName
	)
	const largePhoto = useSelector(
		(state: AppStateType) => state.profilePage.profile.photos.large
	)
	const userId = useSelector((state: AppStateType): any => state.auth.id)

	// ====================================================
	// dispatch

	const onGetInf = (userId: number, resolve: any) => {
		dispatch(getInf(userId, resolve))
	}
	const onGetStatus = (userId: number) => {
		dispatch(getStatus(userId))
	}
	const onUpdateStatus = (status: string) => {
		dispatch(updateStatus(status))
	}
	const onCreatePost = (content: string) => {
		dispatch(createPost(content))
	}
	const onDeletePost = (postId: number) => {
		dispatch(deletePost(postId))
	}

	// ====================================================
	// Side effects

	useEffect(() => {
		new Promise(function (resolve, reject) {
			if (!props.match.params.userId) {
				if (userId) {
					onGetInf(userId, resolve)
				}
			} else {
				onGetInf(props.match.params.userId, resolve)
			}
		})
			.then(function () {
				if (props.match.params.userId) {
					setIsMyProfile((isMyProfile = false))
				} else {
					setIsMyProfile((isMyProfile = true))
				}
			})
			.then(function () {
				if (!props.match.params.userId) {
					if (userId) {
						onGetStatus(userId)
					}
				} else {
					onGetStatus(props.match.params.userId)
				}
			})
	}, [])

	// ====================================================
	// Local state

	let [inputValue, setInputValue] = useState('')
	let [editMode, setEditMode] = useState(false)
	let [isMyProfile, setIsMyProfile] = useState(false)

	// ====================================================
	// Functions

	const onInputBlur = () => {
		onUpdateStatus(inputValue)
		setEditMode((editMode = false))
	}
	const onInputChange = (e: any) => {
		setInputValue(e.currentTarget.value)
	}
	const onSubmit = (formData: any) => {
		onCreatePost(formData.newContent)
	}

	// ====================================================
	// JSX

	return (
		<div className={st.profile}>
			<div className={st.background}></div>

			<div className={st.mainInfo}>
				{/* @ts-ignore */}
				<AvatarContainer isMyProfile={isMyProfile} />

				<p className={st.name}>
					{fullName != null ? fullName : 'Name not found'}
				</p>
				<div className={st.status}>
					{isMyProfile && !editMode && (
						<p
							className={st.status__text}
							onDoubleClick={() => {
								setEditMode((editMode = true))
								setInputValue((inputValue = aboutMe))
							}}
						>
							{aboutMe || 'status not found'}
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
					{!isMyProfile && <p>{aboutMe || 'status not found'}</p>}
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
					{postsData.map((post: postType) => (
						<Post
							content={post.content}
							sharedCount={post.sharedCount}
							commentsCount={post.commentsCount}
							key={post.postId}
							postId={post.postId}
							deletePost={deletePost}
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

export default compose(withRouter)(Profile) as React.ComponentType
