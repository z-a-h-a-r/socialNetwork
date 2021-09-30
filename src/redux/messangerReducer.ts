// ====================================================
// IMPORTS
// Main
import { Dispatch } from 'redux'
import { messengerAPI } from '../api/messengerAPI'
import { BaseThunkType, GetActionsTypes } from './store'

// ====================================================
// Types
const typeSendMessage = 'SN/MESSENGER/SEND-MESSAGE'
const typeSetMessages = 'SN/MESSENGER/SET-MESSAGES'

// ====================================================
// Initial state

let initialState = {
	dialogsLinksData: [{ name: 'chat', id: 1 }] as Array<{
		name: string
		id: number
	}>,
	messages: [] as Array<{
		message: string
		userId: number
		userName: string
		photo: string
	}>,
}

type InitialStateType = typeof initialState

// ====================================================
// Reducer

const messangerReducer = (
	state = initialState,
	action: ActionsTypes
): InitialStateType => {
	switch (action.type) {
		case typeSetMessages:
			return {
				...state,
				messages: [...state.messages, ...action.messages],
			}

		default:
			return state
	}
}

// ====================================================
// Action creators

type ActionsTypes = GetActionsTypes<typeof messengerActions>

export const messengerActions = {
	setMessages: (messages: any) =>
		({
			type: typeSetMessages,
			messages,
		} as const),
}

// ====================================================
// Thunks

type ThunkType = BaseThunkType<ActionsTypes>

const newMassageHandler = (dispatch: Dispatch) => (messages: any) => {
	console.log(1)
	dispatch(messengerActions.setMessages(messages))
}

export const startWSListening = (): ThunkType => {
	return async dispatch => {
		messengerAPI.start()
		messengerAPI.subscribe(newMassageHandler(dispatch))
	}
}
export const stopWSListening = (): ThunkType => {
	return async dispatch => {
		messengerAPI.unSubscribe(newMassageHandler(dispatch))
		messengerAPI.stop()
	}
}

export const sendMessage = (message: string): ThunkType => {
	return async dispatch => {
		messengerAPI.sendMessage(message)
	}
}

// ====================================================
// Exports

export default messangerReducer
