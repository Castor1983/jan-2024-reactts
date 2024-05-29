import React from 'react';
import {useRequestOfComments} from "../customHooks/useRequestOfComments";

const CommentsComponent = () => {

    const comments = useRequestOfComments()
    return (
        <div>
            {
                comments.map(comment => <div>{comment.body}</div>)
            }
        </div>
    );
};

export {CommentsComponent};
