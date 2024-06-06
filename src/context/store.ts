import {IPostModel} from "../models/IPostModel";
import {IUserModel} from "../models/IUserModel";
import {create} from "zustand";

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
    }
}))
