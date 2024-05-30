import React, {FC} from 'react';
import {ICommentModel} from "../models/ICommentModel";
interface IProps {
    comment: ICommentModel
}
const CommentOfPostComponent: FC<IProps> = ({comment}) => {
    return (
        <div>
            {comment.body}
        </div>
    );
};

export {CommentOfPostComponent};
