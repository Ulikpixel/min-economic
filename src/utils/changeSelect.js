export const changeSelect = (array) => {
    return array.map(item => ({ label: item.title, value: item.id }))
};