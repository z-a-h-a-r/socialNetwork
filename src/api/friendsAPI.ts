// ====================================================
// IMPORTS
// Main
import { GetUsersItemsType, instance, ResponseType } from './api'

// ====================================================
// Requests

type getFriendsResponseType = {}

export const friendsAPI = {
	getFriendsAPI: (i: number) => {
		return instance
			.get<GetUsersItemsType>(`users?page=${i}&friend=true`)
			.then(response => response.data)
	},
	searchFriendsAPI: (i: number, term: string) => {
		return instance
			.get<GetUsersItemsType>(`users?page=${i}&friend=true&term=${term}`)
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
