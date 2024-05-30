import React from 'react';
import {useParams} from "react-router-dom";
import {useRequestOfCommentsByPostId} from "../customHooks/useRequestOfCommentsByPostId";
import {CommentsOfPostComponent} from "../components/CommentsOfPostComponent";

const CommentsOfPostPage = () => {
    const{postId}=useParams()
const comments = useRequestOfCommentsByPostId(postId)
    return (
        <div>
            <CommentsOfPostComponent comments={comments}/>
        </div>
    );
};

export {CommentsOfPostPage};
