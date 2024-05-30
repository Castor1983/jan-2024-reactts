import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {PostsOfUserComponent} from "../components/PostsOfUserComponent";
import {useRequestOfPostsByUserId} from "../customHooks/useRequestOfPostsByUserId";

const PostsOfUserPage = () => {
    const { id } = useParams()
    const posts = useRequestOfPostsByUserId(id)
    return (
        <div>
            <PostsOfUserComponent posts={posts}/>
        </div>
    );
};

export {PostsOfUserPage};
