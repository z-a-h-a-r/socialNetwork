import axios from 'axios'
import { UserType } from '../types/types'

// ====================================================
// Instance

export const instance = axios.create({
	withCredentials: true,
	headers: {
		'API-KEY': '71572937-80ec-4dde-adb1-d4b106a7cc21',
	},
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})

// ====================================================

export type GetUsersItemsType = {
	items: Array<UserType>
	totalCount: number
	error: string | null
}

export type ResponseType<DATA = {}> = {
	data: DATA
	messages: Array<string>
	resultCode: number
}
