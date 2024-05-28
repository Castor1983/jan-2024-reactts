import React, {FC} from 'react';
import {useRequestOfTodosOfUser} from "../../hooks/useRequest";
import {TodoComponent} from "./TodoComponent";
import {ITodoModel} from "../../models/ITodoModel/ITodoModel";
interface IProps {
    userId: number
}
const TodosComponent: FC<IProps> = ({userId}) => {
    const todos = useRequestOfTodosOfUser(userId)
    return (
        <div>
            {
                todos.map((todo: ITodoModel) => <TodoComponent key={todo.id} todo={todo}/>)
            }
        </div>
    );
};

export {TodosComponent};
