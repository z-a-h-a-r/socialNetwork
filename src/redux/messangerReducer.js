const typeSendMessage = 'SEND-MESSAGE'
const typeUpdateMessageContent = 'UPDATE-MESSAGE-CONTENT'

// ====================================================

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
	newMessageContent: '',
}

// ====================================================

const messangerReducer = (state = initialState, action) => {
	switch (action.type) {
		case typeSendMessage:
			let newMessage = {
				content: state.newMessageContent,
				id: 7,
				time: '0:58',
			}
			console.log(state.newMessageContent)
			state.messages.push(newMessage)
			state.newMessageContent = ''
			return state

		case typeUpdateMessageContent:
			state.newMessageContent = action.messageContent
			return state

		default:
			return state
	}
}

// ====================================================

export const sendMessageActionCreator = () => ({ type: typeSendMessage })
export const updateMessageContentActionCreator = inputValue => ({
	type: typeUpdateMessageContent,
	messageContent: inputValue,
})

// ====================================================

export default messangerReducer
