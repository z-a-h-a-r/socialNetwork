// ====================================================
// IMPORTS
// Main

// ====================================================
// Requests
type messageType = {
	message: string
	userId: number
	userName: string
	photo: string
}
type subscriberType = (messages: messageType[]) => void

let subscribers = [] as subscriberType[]
let ws: WebSocket | null

const messageHandler = (e: MessageEvent) => {
	let newMessages = JSON.parse(e.data)
	subscribers.forEach(callback => {
		callback(newMessages)
	})
}
const createChannel = () => {
	ws = new WebSocket(
		'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'
	)
	ws.addEventListener('message', messageHandler)
}

export const messengerAPI = {
	subscribe(callback: subscriberType) {
		subscribers.push(callback)
	},
	unSubscribe(callback: subscriberType) {
		subscribers = subscribers.filter(func => func !== callback)
	},
	sendMessage(message: string) {
		ws?.send(message)
	},
	start() {
		createChannel()
	},
	stop() {
		subscribers = []
		ws?.removeEventListener('message', messageHandler)
		ws?.close()
	},
}
