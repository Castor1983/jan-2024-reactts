import React, {useEffect} from 'react';
import {HeaderComponent} from "../components/HeaderComponent";
import {Outlet} from "react-router-dom";
import {useStore} from "../context/store";
import {request} from "../services/api.service";

const MainLayout = () => {
    const {postStore, userStore, photoStore, albumStore, todoStore, commentStore} = useStore();
    useEffect(() => {
        request.postService.getAllPosts().then(value => postStore.loadPosts(value.data));
        request.userService.getAllUsers().then(value => userStore.loadUsers(value.data));
        request.photoService.getAllPhotos().then(value => photoStore.loadPhotos(value.data));
        request.albumService.getAllAlbums().then(value => albumStore.loadAlbums(value.data))
    }, []);


    return (
        <div>

            <HeaderComponent/>
            <Outlet/>

            <hr/>
            {userStore.favoriteUser && <div>{userStore.favoriteUser.username}</div>}
            <hr/>
        </div>
    );
};

export {MainLayout};
