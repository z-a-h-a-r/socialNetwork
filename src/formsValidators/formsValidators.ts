export const required = (value: string): string | undefined => {
	if (!value) return 'this field is required'
	else return undefined
}
export const maxLength =
	(maxLength: number) =>
	(value: string): string | undefined => {
		if (value && value.length > maxLength) return `max length is ${maxLength}`
		else return undefined
	}
