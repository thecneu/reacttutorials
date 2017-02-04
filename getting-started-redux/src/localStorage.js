export const loadState = () => {
	try {
		const data = localStorage.getItem('state');
		return data === null ? undefined : JSON.parse(data)
	} catch(e) {
		return undefined;
	}
}

export const saveState = (state) => {
	try {
		const serializedData = JSON.stringify(state);
		localStorage.setItem('state', serializedData)	
	} catch (e) {}
}