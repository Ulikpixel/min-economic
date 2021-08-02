import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://spring-erf-project.herokuapp.com/api/v1/claim",
});

export const registryAPI = {
    get: async (body) => {
        const pageNumber = body?.pageNumber || 0;
        const page = `/search?pageNumber=${pageNumber - 1}&pageSize=6`;
        const filter = `
            ${ body?.economic ? `&economicActivity.title=${body?.economic}` : "" }
            ${ body?.fullname ? `&fullname=${body?.fullname}` : "" }
            ${ body?.inn      ? `&fullname=${body?.inn}` : "" }
        `;
        const uri = page + filter.trim();
        const response = await instance.get(uri);
        return response.data;
    },
    getRequest: async (id) => {
        const response = await instance.get(`/get/${id}`);
        return response.data;
    },
    post: async (body) => {
        const response = await instance.post("", body);
        return response.data;
    },
    postStatus: async (body) => {
        const response = await Promise.all([
            instance.post("/action/authorized-body", body),
            instance.post("/action/responsible-body", body),
            instance.post("/action/commission", body),
        ]);
        return response.data;
    },
};
