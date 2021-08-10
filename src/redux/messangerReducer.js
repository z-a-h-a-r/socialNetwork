// ====================================================
// IMPORTS
// Main
// ====================================================
// Types

const typeSendMessage = 'SEND-MESSAGE'

// ====================================================
// Initial state

let initialState = {
	dialogsLinksData: [
		{ name: 'name - 1', id: 1 },
		{ name: 'name - 2', id: 2 },
		{ name: 'na', id: 3 },
		{ name: 'name - 4', id: 4 },
	],
	messages: [
		{ content: 'messages', id: 1, time: '0:36' },
		{ content: 'messages', id: 1, time: '0:08' },
	],
}

// ====================================================
// Reducer

const messangerReducer = (state = initialState, action) => {
	switch (action.type) {
		case typeSendMessage:
			return {
				...state,
				messages: [
					...state.messages,
					{ ...action.message, id: 2, time: '0:82' },
				],
			}

		default:
			return state
	}
}

// ====================================================
// Action creators

export const sendMessage = message => ({ type: typeSendMessage, message })

// ====================================================
// Exports

export default messangerReducer
