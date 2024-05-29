import React from 'react';
import {useRequestOfTodos} from "../customHooks/useRequestOfTodos";

const TodosComponent = () => {
    const todos = useRequestOfTodos()
    return (
        <div>
            {todos.map(todo => <div>{todo.title}</div>)}
        </div>
    );
};

export {TodosComponent};
