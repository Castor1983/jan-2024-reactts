import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import {NavLink} from "react-router-dom";

interface IProps {
    post: IPostModel
}

const PostComponent: FC <IProps> = ({post}) => {
    return (
        <div>
            {post.id}.
            {post.title}
            {post.body}
            <button onClick={<NavLink>} >view comments</button>
            <hr/>
        </div>
    );
};

export {PostComponent};
