import React, {FC} from 'react';
import {UserWithPostsType} from "../../models/UserWithPostsType";

interface Iprops {
    userWithPosts: UserWithPostsType
}

const UserPostsComponent : FC <Iprops>= ({userWithPosts}) => {
    return (
        <div>
            {userWithPosts.name}
            <ul>
                {
                    userWithPosts.posts.map((post) => (<li key={post.id}> {post.title}</li>))
                }
            </ul>
        </div>
    );
};

export {UserPostsComponent};
