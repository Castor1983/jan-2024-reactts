import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";
import {PostsOfUserComponent} from "../components/PostsOfUserComponent";
import {useRequestOfPostsByUserId} from "../customHooks/useRequestOfPostsByUserId";

const PostsOfUserPage = () => {
    const { id } = useParams()
    const posts = useRequestOfPostsByUserId(id)
    return (
        <div>
            <PostsOfUserComponent posts={posts}/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {PostsOfUserPage};
