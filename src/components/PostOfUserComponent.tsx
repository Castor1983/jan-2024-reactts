import React, {FC} from 'react';
import {IPostModel} from "../models/IPostModel";
interface IProps {
    post: IPostModel
}
const PostOfUserComponent: FC<IProps> = ({post}) => {
    return (
        <div>
            {post.title}
        </div>
    );
};

export {PostOfUserComponent};
