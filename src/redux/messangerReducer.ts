// ====================================================
// IMPORTS
// Main
import { BaseThunkType, GetActionsTypes } from './store'

// ====================================================
// Types
const typeSendMessage = 'SN/MESSENGER/SEND-MESSAGE'

// ====================================================
// Initial state

let initialState = {
	dialogsLinksData: [
		{ name: 'name - 1', id: 1 },
		{ name: 'name - 2', id: 2 },
		{ name: 'na', id: 3 },
		{ name: 'name - 4', id: 4 },
	] as Array<{ name: string; id: number }>,
	messages: [
		{ content: 'messages', id: 1, time: '0:36' },
		{ content: 'messages', id: 1, time: '0:08' },
	] as Array<{ content: string; id: number; time: string }>,
}

type InitialStateType = typeof initialState

// ====================================================
// Reducer

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

type ActionsTypes = GetActionsTypes<typeof messengerActions>

export const messengerActions = {
	sendMessageSuccess: (newContent: string) =>
		({
			type: typeSendMessage,
			newContent,
		} as const),
}

// ====================================================
// Thunks

type ThunkType = BaseThunkType<ActionsTypes>

export const sendMessage = (newContent: string): ThunkType => {
	return async dispatch => {
		dispatch(messengerActions.sendMessageSuccess(newContent))
	}
}

// ====================================================
// Exports

export default messangerReducer
