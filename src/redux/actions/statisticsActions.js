import { statisticsAPI } from "../../API";
// actions
const setStatistics = (payload) => ({ type: "CHANGE_STATISTICS", key: "interest",   payload });
const isFetching    = (payload) => ({ type: "CHANGE_STATISTICS", key: "isFetching", payload });
const setTotal      = (payload) => ({ type: "CHANGE_STATISTICS", key: "total",      payload });
const setExl        = (payload) => ({ type: "CHANGE_STATISTICS", key: "exl", payload });

// thunks
export const getStatistics = () => (dispatch) => {
    dispatch(isFetching(true));
    statisticsAPI.get().then((data) => {
        dispatch(isFetching(false));
        dispatch(setStatistics(data.interest));
        const statistics = Object.values(data.interest).reduce((a, n) => a + n, 0);
        dispatch(setTotal(statistics));
        dispatch(setExl(data.exl));
    }).catch((err) => dispatch(isFetching(false)));
};