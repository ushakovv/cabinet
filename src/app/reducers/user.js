const initialState = {
    id: 0,
};

export const user = (state = initialState, action) => {
    if (action.type === 'LOGIN_USER') {
        return { ...action.payload };
    }
    return state;
};
