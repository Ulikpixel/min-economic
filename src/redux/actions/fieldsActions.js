import { fieldsAPI } from "../../API";

// actions
const setSelect = (payload) => ({ type: "CHANGE_FIELDS", key: "select", payload });
const isFetching = (payload) => ({ type: "CHANGE_FIELDS", key: "isFetching", payload });
const isPostRequest = (payload) => ({ type: "CHANGE_FIELDS", key: "isPostRequest", payload });

// thunks
export const getSelect = () => (dispatch) => {
    dispatch(isFetching(true));
    fieldsAPI.getAll().then((values) => {
        dispatch(isFetching(false));
        dispatch(setSelect(values));
    }).catch((err) => {
        dispatch(isFetching(false));
    });
};

export const postNewField = (body, type) => (dispatch) => {
    dispatch(isPostRequest(true));
    fieldsAPI.post(body, type).then((data) => {
        console.log(data);
        dispatch(isPostRequest(false));
    }).catch(() =>   dispatch(isPostRequest(false)));
};