export const choice = (items = []) => {
    return items[Math.floor(Math.random() * items.length)];
}

export const remove = (items = [], item) => {
    for (let i = 0; i < items.length; i++) {
        if(items[i] === item) {
            return [...items.slice(0, i), ...items.slice(i+1)];
        }
    }
}
