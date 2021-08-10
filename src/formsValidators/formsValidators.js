export const required = value => {
	if (!value) return 'this field is required'
	else return undefined
}
export const maxLength = maxLength => value => {
	if (value && value.length > maxLength) return `max length is ${maxLength}`
	else return undefined
}
