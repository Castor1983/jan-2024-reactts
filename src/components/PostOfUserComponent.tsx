import React, {FC} from 'react';
import {IPostModel} from "../models/IPostModel";
import {NavLink} from "react-router-dom";
interface IProps {
    post: IPostModel
}
const PostOfUserComponent: FC<IProps> = ({post}) => {
    return (
        <div>
            <NavLink to={post.id.toString() + '/comments'}>
            {post.title}
        </NavLink>
        </div>
    );
};

export {PostOfUserComponent};
