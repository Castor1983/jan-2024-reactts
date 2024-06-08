import {createBrowserRouter} from "react-router-dom";
import React from "react";
import {MainLayout} from "../layout/MainLayout";
import {UsersPage} from "../pages/UsersPage";
import {PostsPage} from "../pages/PostsPage";
import {UserPostsPage} from "../pages/UserPostsPage";
import {PhotosPage} from "../pages/PhotosPage";
import {AlbumsPage} from "../pages/AlbumsPage";

export const routerConfig = createBrowserRouter(
    [
        {path: '/', element: <MainLayout/>, children: [
                {path:'users', element:<UsersPage/>},
                {path:'posts', element: <PostsPage/>},
                {path:'userPosts', element: <UserPostsPage/>},
                {path:'photos', element: <PhotosPage/>},
                {path:'albums', element: <AlbumsPage/>}
            ]}
    ]
)
