import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";

export const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {}
})

export const request = {
    userService: {
        getAllUsers: async (): Promise<AxiosResponse<IUserModel[]>> => {
             return await axiosInstance.get<IUserModel[]>('/users')
        }
    },
    postService: {
        getAllPosts: async ():Promise<AxiosResponse<IPostModel[]>> => {
            return await  axiosInstance.get<IPostModel[]>('/posts')
        }

    }
}
