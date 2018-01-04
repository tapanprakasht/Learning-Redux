export const addItem = (item) => {
    console.log('Called add Item with ' + item);
    return {
        type: 'ADD_ITEM',
        payload: item,
    }
};