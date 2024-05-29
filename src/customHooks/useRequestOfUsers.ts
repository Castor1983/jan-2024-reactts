import {useEffect, useState} from "react";
import {IUserModel} from "../models/IUserModel";
import {request} from "../services/api.service";

export const useRequestOfUsers = () =>{
    const [users, setUsers] = useState<IUserModel[]>([])
    useEffect(() => {
request.users.getAllUsers().then(value => setUsers(value.data))
    }, []);
    return users
}
