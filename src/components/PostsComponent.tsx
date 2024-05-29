import React from 'react';
import {useRequestOfPosts} from "../customHooks/useRequestOfPosts";

const PostsComponent = () => {

    const posts = useRequestOfPosts()
    return (
        <div>
            {
                posts.map(post => <div>{post.title}</div>)
            }
        </div>
    );
};

export {PostsComponent};
