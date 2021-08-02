import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://spring-erf-project.herokuapp.com/api/v1/",
});

export const authAPI = {
    login: async (body) => {
        const response = await instance.post("login", body);
        return response.data;
    },
    logout: async () => {
        const response = await instance.get("logout");
        return response.data;
    },
};
