import axios, {AxiosResponse} from "axios";
import {IPostModel} from "../models/IPostModel";
import {IUserModel} from "../models/IUserModel";
import {ICommentModel} from "../models/ICommentModel";
import {IAlbumModel} from "../models/IAlbumModel";
import {ITodoModel} from "../models/ITodoModel";
import {IPhotoModel} from "../models/IPhotoModel";

let axiosInstance = axios.create(
    {
        baseURL: 'https://jsonplaceholder.typicode.com/',
        headers: {}
    }
)
 export const request= {
    users: {
        getAllUsers: (): Promise<AxiosResponse<IUserModel[]>> => {
           return  axiosInstance.get('users')
        },
        getPostsByUserId: (userId: string): Promise<AxiosResponse<IPostModel[]>> => {
            return axiosInstance.get(`users/${userId}/posts`)
        }
    },
    posts: {
        getAllPosts: (): Promise<AxiosResponse<IPostModel[]>> => {
           return  axiosInstance.get('posts')

    },
        getCommentsByPostId: (postId: string): Promise<AxiosResponse<ICommentModel[]>> => {
            return axiosInstance.get(`posts/${postId}/comments`)
        }

    },
    comments: {
        getAllComments: (): Promise<AxiosResponse<ICommentModel[]>> => {
          return   axiosInstance.get('comments')

    }},
    albums: {
        getAllAlbums: (): Promise<AxiosResponse<IAlbumModel[]>> => {
          return   axiosInstance.get('albums')

    }
},
    todos: {
        getAllTodos: (): Promise<AxiosResponse<ITodoModel[]>> => {
          return   axiosInstance.get('todos')

    }
},
     photos: {
        getAllPhotos: (): Promise<AxiosResponse<IPhotoModel[]>> => {
          return   axiosInstance.get('photos')

    }
}}
