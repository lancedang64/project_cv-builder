export function setLocalStorageData(value) {
	localStorage.setItem('formData', JSON.stringify(value));
}

export function getLocalStorageData() {
	const data = JSON.parse(localStorage.getItem('formData'));
	return data;
}
