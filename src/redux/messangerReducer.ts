// ====================================================
// IMPORTS
// Main
// ====================================================
// Types

const typeSendMessage = 'SEND-MESSAGE'

// ====================================================
// Initial state

type DialogType = {
	name: string
	id: number
}
type MessageType = {
	content: string
	id: number
	time: string
}

let initialState = {
	dialogsLinksData: [
		{ name: 'name - 1', id: 1 },
		{ name: 'name - 2', id: 2 },
		{ name: 'na', id: 3 },
		{ name: 'name - 4', id: 4 },
	] as Array<DialogType>,
	messages: [
		{ content: 'messages', id: 1, time: '0:36' },
		{ content: 'messages', id: 1, time: '0:08' },
	] as Array<MessageType>,
}

export type InitialStateType = typeof initialState

// ====================================================
// Reducer

type ActionsTypes = sendMessageType

const messangerReducer = (
	state = initialState,
	action: ActionsTypes
): InitialStateType => {
	switch (action.type) {
		case typeSendMessage:
			return {
				...state,
				messages: [
					...state.messages,
					{ content: action.newContent, id: 2, time: '0:82' },
				],
			}

		default:
			return state
	}
}

// ====================================================
// Action creators

type sendMessageType = {
	type: typeof typeSendMessage
	newContent: string
}

export const sendMessage = (newContent: string): sendMessageType => ({
	type: typeSendMessage,
	newContent,
})

// ====================================================
// Exports

export default messangerReducer
