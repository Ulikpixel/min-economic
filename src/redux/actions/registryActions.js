import { registryAPI } from "../../API";

//  actions
const setRegistry = (payload) => ({ type: "CHANGE_REGISTRY", key: "list", payload });
const isFetching = (payload) => ({ type: "CHANGE_REGISTRY", key: "isFetching", payload });
const setTotalCount = (payload) => ({ type: "CHANGE_REGISTRY", key: "totalCount", payload });
const setSize = (payload) => ({ type: "CHANGE_REGISTRY", key: "size", payload });
const setTotalPage = (payload) => ({ type: "CHANGE_REGISTRY", key: "totalPage", payload });
const setRequest = (payload) => ({ type: "CHANGE_REGISTRY", key: "request", payload });
const setSend = (payload) => ({ type: "CHANGE_REGISTRY", key: "isSend", payload });
const setGetRequest = (payload) => ({ type: "CHANGE_REGISTRY", key: "isGetRequest", payload });
const setStatus = (payload) => ({ type: "CHANGE_REGISTRY", key: "isStatus", payload });
export const changeCause   = (payload) => ({ type: "CHANGE_REGISTRY", key: "request", payload });
export const sortRegistry = (payload) => ({ type: "CHANGE_REGISTRY", key: "sort", payload });

// thunks
export const getRegistry = (body) => (dispatch) => {
    dispatch(isFetching(true));
    registryAPI.get(body).then((data) => {
        dispatch(isFetching(false));
        dispatch(setRegistry(data.content));
        dispatch(setTotalCount(data.totalElements));
        dispatch(setSize(data.size));
        dispatch(setTotalPage(data.totalPages));
    }).catch((err) => dispatch(isFetching(false)));
};

export const getRequest = (id) => (dispatch) => {
    dispatch(setGetRequest(true));
    registryAPI.getRequest(id).then((data) => {
        dispatch(setRequest(data));
        dispatch(setGetRequest(false));
    }).catch((err) => dispatch(setGetRequest(false)));
};

export const postRequest = (body) => (dispatch) => {
    dispatch(setSend(true));
    registryAPI.post(body).then((data) => {
        dispatch(setSend(false));
    }).catch((err) => dispatch(setSend(false)));
};

export const setStatusRequest = (body) => (dispatch) => {
    dispatch(setStatus(true));
    registryAPI.postStatus(body).then((data) => {
        console.log(data);
        dispatch(setStatus(false));
    }).catch((err) =>  dispatch(setStatus(false)));
};
