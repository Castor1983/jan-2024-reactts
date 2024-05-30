import React, {FC} from 'react';
import {IPostModel} from "../models/IPostModel";
import {PostOfUserComponent} from "./PostOfUserComponent";
interface IProps {
    posts: IPostModel[]
}
const PostsOfUserComponent: FC<IProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map(post => <PostOfUserComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export {PostsOfUserComponent};
