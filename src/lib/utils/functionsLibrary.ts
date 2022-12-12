// functions
export function clearField(field: HTMLTextAreaElement | null | undefined) {
	if (field) {
		field.value = '';
	} else {
		// do nothing
	}
}
