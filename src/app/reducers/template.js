const initialState = [];

export const template = (state = initialState, action) => {
    if (action.type === 'GET_ALL_TEMPLATES') {
        return [...action.payload];
    }
    return state;
};
