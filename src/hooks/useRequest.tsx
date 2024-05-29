import {useEffect, useState} from "react";
import {request} from "../services/requestService";
import {AxiosResponse} from "axios";
import {IUsersResponseModel} from "../models/responseModels/IUsersResponseModel";
import {IUserModel} from "../models/userModels/IUserModel";
import {ITodoModel} from "../models/ITodoModel/ITodoModel";
import {ITodosOfUserIdResponseModel} from "../models/responseModels/ITodosOfUserIdResponseModel";
import {IProps} from "../components/userComponents/NewUserFormComponent";


export const useRequestOfUsers = () => {
    const [response, setResponse] = useState<IUserModel[]>([])
    useEffect(() => {
request.users.getAllUsers().then(({data}: AxiosResponse <IUsersResponseModel>) => setResponse([...data.users]))
    }, []);
    return response
}
export const useRequestOfTodosOfUser = (userId: number) => {
    const [response, setResponse] = useState<ITodoModel[]>([])
    useEffect(() => {
request.todos.getTodosByUserId(userId).then(({data}:AxiosResponse<ITodosOfUserIdResponseModel>) => setResponse([...data.todos]))
    }, [userId]);
    return response
}
export const useRequestNewUser = (user: IProps) => {
    const [response, setResponse] = useState<IUserModel | null>(null)

request.users.postNewUser(user).then(({data}:AxiosResponse<any>) => setResponse(data))
return response
}
