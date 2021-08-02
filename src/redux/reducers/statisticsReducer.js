const initialState = {
    interest: {
        inProcessing: 0, 
        underConsideration: 0, 
        ready: 0, 
        renouncement: 0,
    },   
    exl: "",
    isFetching: false,
    total: 0,
};

const statisticsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_STATISTICS":
            return { ...state, [action.key]: action.payload };
        default:
            return state;
    }
};

export default statisticsReducer;