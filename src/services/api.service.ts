import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";
import {ITodoModel} from "../models/ITodoModel";
import {IAlbumModel} from "../models/IAlbumModel";
import {IPhotoModel} from "../models/IPhotoModel";

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

    },
    commentService: {
        getAllComments: async (): Promise<AxiosResponse<ICommentModel[]>> =>{
            return await axiosInstance.get<ICommentModel[]>('/comments')
        }

    },
    todoService: {
        getAllTodos: async ():Promise<AxiosResponse<ITodoModel[]>> => {
            return await axiosInstance.get<ITodoModel[]>('/todos')
        }
    },
    albumService: {
        getAllAlbums: async (): Promise<AxiosResponse<IAlbumModel[]>> => {
            return await axiosInstance.get<IAlbumModel[]>('/albums')
        }
    },
    photoService: {
        getAllPhotos: async (): Promise<AxiosResponse<IPhotoModel[]>> =>{
            return await axiosInstance.get<IPhotoModel[]>('/photos')
        }
    }
}
