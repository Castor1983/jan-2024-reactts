import {IPostModel} from "../models/IPostModel";
import {IUserModel} from "../models/IUserModel";
import {create} from "zustand";
import {ITodoModel} from "../models/ITodoModel";
import {ICommentModel} from "../models/ICommentModel";
import {IAlbumModel} from "../models/IAlbumModel";
import {IPhotoModel} from "../models/IPhotoModel";

type StoreType = {
    userStore:{
        allUsers: IUserModel[]
        loadUsers: (users: IUserModel[])=> void
        setFavoriteUser: (obj: IUserModel) => void
        favoriteUser: IUserModel | null
    },
    postStore:{
        allPosts: IPostModel[]
        loadPosts: (posts: IPostModel[])=> void
    },
    todoStore:{
        allTodos: ITodoModel[]
        loadPosts: (todos: ITodoModel[])=> void
    },
    commentStore:{
        allComments: ICommentModel[]
        loadComments: (comments: ICommentModel[])=> void
    },
    albumStore:{
        allAlbums: IAlbumModel[]
        loadAlbums: (albums: IAlbumModel[])=> void
    }
    photoStore:{
        allPhotos: IPhotoModel[]
        loadPhotos: (photos: IPhotoModel[])=> void
    }
}
export const useStore = create<StoreType>()(setState => ({
userStore:{
    allUsers: [],
    loadUsers: (users: IUserModel[])=> {
        return setState((state) => {
            return {
                ...state,
                userStore: {
                    ...state.userStore,
                    allUsers: users
                }
            }
        })
    },
    favoriteUser: null,
    setFavoriteUser: (obj: IUserModel) => {
        return setState((state)=>{
            return {
                ...state,
                userStore: {
                    ...state.userStore,
                    favoriteUser: obj
                }
            }
        })
    }
},
    postStore: {
        allPosts: [],
        loadPosts: (posts: IPostModel[]) => {
            return setState((state) => {
                return{
                    ...state,
                    postStore: {
                        ...state.postStore,
                        allPosts: posts
                    }
                }
            })
    }
    },
    todoStore:{
        allTodos: [],
        loadPosts: (todos: ITodoModel[])=> {
            return setState(state => {
                return {
                    ...state,
                    todoStore: {
                        ...state.todoStore,
                        allTodos: todos
                    }
                }
            })
        }
    },
    commentStore:{
        allComments: [],
        loadComments: (comments: ICommentModel[])=> {
            return setState(state => {
                return{
                    ...state,
                    commentStore: {
                        ...state.commentStore,
                        allComments: comments
                    }
                }
            })
        }
    },
    albumStore:{
        allAlbums: [],
        loadAlbums: (albums: IAlbumModel[])=> {
            return setState(state => {
                return{
                    ...state,
                    albumStore: {
                        ...state.albumStore,
                        allAlbums: albums
                    }
                }
            })
        }
    },
    photoStore:{
        allPhotos: [],
        loadPhotos: (photos: IPhotoModel[])=> {
            return setState(state => {
                return{
                    ...state,
                    photoStore: {
                        ...state.photoStore,
                        allPhotos: photos
                    }
                }
            })
        }
    }
}))
