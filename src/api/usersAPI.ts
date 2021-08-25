// ====================================================
// IMPORTS
// Main
import { GetUsersItemsType, instance, ResponseType } from './api'

// ====================================================
// Requests

type getUsersResponseType = {}

export const usersAPI = {
	getUsersAPI: (i: number) => {
		return instance
			.get<GetUsersItemsType>(`users?page=${i}`)
			.then(response => response.data)
	},
	toggleFollowAPI: (id: number, nextFollowState: boolean) => {
		if (nextFollowState) {
			return instance
				.post<ResponseType>(`follow/${id}`)
				.then(response => response.data)
		} else {
			return instance
				.delete<ResponseType>(`follow/${id}`)
				.then(response => response.data)
		}
	},
}
