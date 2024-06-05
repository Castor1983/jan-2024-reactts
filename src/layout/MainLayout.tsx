import React, {useEffect, useState} from 'react';
import {HeaderComponent} from "../components/HeaderComponent";
import {Outlet} from "react-router-dom";
import {MyContext} from "../context/ContextProvider";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {request} from "../services/api.service";

const MainLayout = () => {
    const [users, setUsers] = useState<IUserModel[]>([])
    const [favoriteUser, setFavoriteUser] = useState<IUserModel | null>(null)
    const [posts, setPosts] = useState<IPostModel[]>([])
    useEffect(() => {
        request.postService.getAllPosts().then(value => setPosts(value.data));
        request.userService.getAllUsers().then(value => setUsers(value.data))
    }, []);

    const lift = (obj: IUserModel) => {
        setFavoriteUser(obj)
    }

    return (
        <div>
            <MyContext.Provider value = {
                {
                    userStore:{
                    allUsers: users,
                        favoriteUser: (obj: IUserModel) => lift(obj)
                    },
                    postStore:{
                    allPosts: posts
                    }
                }
            }>
            <HeaderComponent/>
            <Outlet/>
            </MyContext.Provider>

            <hr/>
            {favoriteUser && <div>{favoriteUser.username}</div>}
            <hr/>
        </div>
    );
};

export {MainLayout};
