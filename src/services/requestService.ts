import axios, {AxiosResponse} from "axios";
import {IUsersResponseModel} from "../models/responseModels/IUsersResponseModel";
import {ITodosOfUserIdResponseModel} from "../models/responseModels/ITodosOfUserIdResponseModel";
import {IProps} from "../components/userComponents/NewUserFormComponent";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {'Content-Type': 'application/json'}
})

let request = {
    users: {
        getAllUsers: ():Promise<AxiosResponse<IUsersResponseModel>> => {
            return axiosInstance.get('/users')
        },
        postNewUser: (formValues:IProps):Promise<AxiosResponse<IProps>> =>{
            return axiosInstance.post('/users/add', formValues  )
        }
    },
        todos: {
            getTodosByUserId: (userId: number):Promise<AxiosResponse<ITodosOfUserIdResponseModel>> => {
                return axiosInstance.get('/todos/user/' + userId)
            }
        }

}

export { request}
