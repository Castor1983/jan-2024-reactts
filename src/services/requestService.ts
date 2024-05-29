import axios, {AxiosResponse} from "axios";
import {IUsersResponseModel} from "../models/responseModels/IUsersResponseModel";
import {ITodosOfUserIdResponseModel} from "../models/responseModels/ITodosOfUserIdResponseModel";
import {IProps} from "../components/userComponents/NewUserFormComponent";
import {IUserModel} from "../models/userModels/IUserModel";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {'Content-Type': 'application/json'}
})

let request = {
    users: {
        getAllUsers: ():Promise<AxiosResponse<IUsersResponseModel>> => {
            return axiosInstance.get('/users')
        },
        postNewUser: ({firstName, lastName, age, gender, email, phone, username, password}:IProps):Promise<AxiosResponse<IUserModel>> =>{
            return axiosInstance.post('/users/add', {firstName, lastName, age, gender, email, phone, username, password}  )
        }
    },
        todos: {
            getTodosByUserId: (userId: number):Promise<AxiosResponse<ITodosOfUserIdResponseModel>> => {
                return axiosInstance.get('/todos/user/' + userId)
            }
        }

}

export { request}
