import React, {FC} from 'react';
import {ITodoModel} from "../../models/ITodoModel/ITodoModel";
interface IProps {
    todo: ITodoModel
}
const TodoComponent: FC<IProps> = ({todo}) => {
    return (
        <div>
            {todo.userId}
            {todo.todo}
        </div>
    );
};

export {TodoComponent};
