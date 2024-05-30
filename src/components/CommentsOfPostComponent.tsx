import React, {FC} from 'react';
import {ICommentModel} from "../models/ICommentModel";
import {CommentOfPostComponent} from "./CommentOfPostComponent";

interface IProps {
    comments: ICommentModel[]
}
const CommentsOfPostComponent: FC<IProps> = ({comments}) => {
    return (
        <div>
            {
                comments.map(comment => <CommentOfPostComponent key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export {CommentsOfPostComponent};
