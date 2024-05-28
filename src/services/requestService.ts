import axios, {AxiosResponse} from "axios";
import {IUsersResponseModel} from "../models/responseModels/IUsersResponseModel";
import {ITodosOfUserIdResponseModel} from "../models/responseModels/ITodosOfUserIdResponseModel";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {'content-type': 'application/json; charset=UTF-8'}
})

let request = {
    users: {
        getAllUsers: ():Promise<AxiosResponse<IUsersResponseModel>> => {
            return axiosInstance.get('/users')
        },
    },
        todos: {
            getTodosByUserId: (userId: number):Promise<AxiosResponse<ITodosOfUserIdResponseModel>> => {
                return axiosInstance.get('/todos/user/' + userId)
            }
        }

}

export { request}
