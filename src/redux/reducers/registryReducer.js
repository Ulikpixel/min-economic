const initialState = {
    list: [],
    totalCount: 1,
    size: 0,
    totalPage: 0,
    request: {},
    isFetching: false,
    isSend: false,
    isGetRequest: false,
    isStatus: false,
    sort: {},
};

const registryReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_REGISTRY":
            return { ...state, [action.key]: action.payload };
        default:
            return state;
    }
};

export default registryReducer;