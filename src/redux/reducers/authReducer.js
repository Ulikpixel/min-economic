const initialState = {
    isAuth: true,
    info: {},
    isLogin: false,
    role: 0,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_AUTH":
            return { ...state, [action.key]: action.payload };
        default:
            return state;
    }
};

export default authReducer;