import {retriveLocalStorageData} from "./helpers/helpers";
import axios, {AxiosError} from "axios";
import {ITokenObtainPair} from "../models/ITokenObtainPair";
import {AuthDataModel} from "../models/AuthDataModel";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";

const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2',
    headers: {}
});

axiosInstance.interceptors.request.use(request => {

    if (localStorage.getItem('tokenPair') && (request.url !== '/auth' && request.url !== '/auth/refresh')) {
        const iTokenObtainPair = retriveLocalStorageData<ITokenObtainPair>('tokenPair');
        request.headers.set('Authorization', 'Bearer ' + iTokenObtainPair.access);
    }

    return request;
})

const authService = {
    authentication: async (authData: AuthDataModel): Promise<boolean> => {
        const response = await axiosInstance.post<ITokenObtainPair>('/auth', authData);
            localStorage.setItem('tokenPair', JSON.stringify(response.data));
        return !!(response?.data?.access && response?.data?.refresh);
    },
    refresh: async () => {
        const refreshToken = retriveLocalStorageData<ITokenObtainPair>('tokenPair').refresh
        const response = await axiosInstance.post<ITokenObtainPair>('/auth/refresh', {refresh: refreshToken});
        localStorage.setItem('tokenPair', JSON.stringify(response.data));

    },


}

const carService = {
    getCars: async (page: string = '1') => {
            const response = await axiosInstance.get<ICarPaginatedModel>('/cars', { params:
            {
                page: page
            }
        });
            return response.data;
    }
}

export {
    authService,
    carService
}
