const loadData = () => {
    try {
        const state = localStorage.getItem('state')

        if (state) {
            return JSON.parse(state)
        }

        return undefined
    } catch (err) {
        return undefined
    }
}

const saveData = (state) => {
    try {
        localStorage.setItem('state', JSON.stringify(state))
    } catch(err) {
        console.warn('Error: localStorage ' , err)
    }
}

export { loadData, saveData }
