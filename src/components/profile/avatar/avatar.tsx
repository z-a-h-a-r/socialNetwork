// ====================================================
// IMPORTS
// Main
import { useEffect } from 'react'
import { useState } from 'react'
import { FC } from 'react'
import {
	AvatarDispatchType,
	AvatarOwnType,
	AvatarStateType,
} from './avatarContainer'
// Styles
import st from './avatar.module.scss'
// Components
import { colorsForAvatars } from '../../../variables/colorsForAvatar'
import { getRandomIntInclusive } from '../../../functions/getRandomIntInclusive'

// ====================================================
// Component

type PropsType = AvatarStateType & AvatarDispatchType & AvatarOwnType

const Avatar: FC<PropsType> = props => {
	// ====================================================
	// Hooks

	useEffect(() => {
		setIndexAvatarBg((indexAvatarBg = getRandomIntInclusive(0, 18)))
	}, [])

	// ====================================================
	// Local state
	let [indexAvatarBg, setIndexAvatarBg] = useState(1)
	let [editMode, setEditMode] = useState(false)

	// ====================================================
	// functions
	const onAvatarDoubleClick = () => {
		setEditMode((editMode = true))
	}
	const onCloseClick = () => {
		setEditMode((editMode = false))
	}
	const onChooseFile = (e: any) => {
		const fakeResolve = (func: any) => {
			func()
		}
		if (e.target.files[0]) {
			if (props.userId) {
				props.saveAvatar(e.target.files[0], props.userId, fakeResolve)
				setEditMode((editMode = false))
			}
		}
	}

	// ====================================================
	// JSX

	if (props.isMyProfile) {
		return (
			<div className={st.wrapper}>
				<div className={st.avatarWrapper}>
					{props.largePhoto && (
						<img
							src={props.largePhoto}
							alt=""
							className={st.avatarImage}
							onDoubleClick={onAvatarDoubleClick}
						/>
					)}
					{!props.largePhoto && (
						<div
							className={st.avatarDiv}
							style={{
								background: `${colorsForAvatars[indexAvatarBg]}`,
							}}
							onDoubleClick={onAvatarDoubleClick}
						>
							{props.fullName ? props.fullName.substr(0, 1).toUpperCase() : ''}
						</div>
					)}
				</div>

				{editMode && (
					<div className={st.downloadWrrapper}>
						<input
							type="file"
							className={st.download}
							onChange={onChooseFile}
						/>
						<p onClick={onCloseClick}>close</p>
					</div>
				)}
			</div>
		)
	} else {
		return (
			<div className={st.avatarWrapper}>
				{props.largePhoto && (
					<img src={props.largePhoto} alt="" className={st.avatarImage} />
				)}
				{!props.largePhoto && (
					<div
						className={st.avatarDiv}
						style={{
							background: `${colorsForAvatars[indexAvatarBg]}`,
						}}
					>
						{props.fullName && props.fullName.substr(0, 1).toUpperCase()}
						{!props.fullName && ''}
					</div>
				)}
			</div>
		)
	}
}

// ====================================================
// Exports

export default Avatar
