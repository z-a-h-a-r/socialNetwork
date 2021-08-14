// ====================================================
// IMPORTS
// Main
import axios from 'axios'

// ====================================================
// Instance

const instance = axios.create({
	withCredentials: true,
	headers: {
		'API-KEY': '71572937-80ec-4dde-adb1-d4b106a7cc21',
	},
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})

// ====================================================
// Requests

export const profileAPI = {
	getProfileDataAPI: userId => {
		return instance.get(`profile/${userId}`).then(response => response.data)
	},
	getStatusAPI: id => {
		return instance.get(`profile/status/${id}`).then(response => response.data)
	},
	updateStatusAPI: status => {
		return instance
			.put(`profile/status`, { status })
			.then(response => response.data)
	},
	saveAvatarAPI: file => {
		let formData = new FormData()
		formData.append('image', file)
		return instance
			.put(`profile/photo`, formData)
			.then(response => response.data)
	},
}
