const initialState = {
    select: {
        region: [],
        organ: [],
        activity: [],
        cause: [],
        subject: [],
    },
    isFetching: false,
    isPostRequest: false,
};

const fieldsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_FIELDS":
            return { ...state, [action.key]: action.payload };
        default:
            return state;
    };
};

export default fieldsReducer;