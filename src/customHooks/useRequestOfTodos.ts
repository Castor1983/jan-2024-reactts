import {useEffect, useState} from "react";
import {ITodoModel} from "../models/ITodoModel";
import {request} from "../services/api.service";

export const useRequestOfTodos = () =>{
    const [todos, setTodos] = useState<ITodoModel[]>([])
    useEffect(() => {
request.todos.getAllTodos().then(value => setTodos(value.data))
    }, []);
    return todos
}
