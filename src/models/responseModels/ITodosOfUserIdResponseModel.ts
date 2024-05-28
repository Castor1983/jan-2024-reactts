import {ITodoModel} from "../ITodoModel/ITodoModel";


export interface ITodosOfUserIdResponseModel {
    limit: number,
    skip: number,
    total: number,
    todos: ITodoModel[]
}
