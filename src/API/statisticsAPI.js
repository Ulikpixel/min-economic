import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://spring-erf-project.herokuapp.com/api/v1/",
});

export const statisticsAPI = {
    getExl: async () => {
        const response = await instance.get("excel");
        return response.data;
    },
    get: async () => {
        const response = await instance.get("stat");
        const exl = await statisticsAPI.getExl();
        return { interest: response.data, exl };
    },
};