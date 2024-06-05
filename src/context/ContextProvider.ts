import {IPostModel} from "../models/IPostModel";
import {IUserModel} from "../models/IUserModel";
import {createContext, useContext} from "react";

type StoreType = {
    userStore:{
        allUsers: IUserModel[],
        favoriteUser: (obj: IUserModel) => void
    },
    postStore:{
        allPosts: IPostModel[]
    }
}
const defaultValue: StoreType = {
    userStore:{
        allUsers: [],
        favoriteUser: ()=> {}
    },
    postStore:{
        allPosts: []
    }
}
export const MyContext = createContext(defaultValue);
export const useContextProvider = (): StoreType => useContext(MyContext);
