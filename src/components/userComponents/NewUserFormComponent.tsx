import React, { useState} from 'react';
import {useForm} from "react-hook-form";
import {IUserModel} from "../../models/userModels/IUserModel";
import {request} from "../../services/requestService";
import {AxiosResponse} from "axios";
export interface IProps {
    firstName: string,
    lastName: string,
    age: number,
    gender: string,
    email: string,
    phone: string,
    username: string,
    password: string,
}
const NewUserFormComponent = () => {
    let{register, handleSubmit}=useForm<IProps>({})
    const [user, setUser] = useState<IUserModel | null>(null)
    const save = (user: IProps) => {
        request.users.postNewUser(user).then(({data}:AxiosResponse<IUserModel>) => setUser(data))
    }

    return (
        <>
        <form onSubmit={handleSubmit (save)}>
            <input type="text" {...register("firstName")}/>
            <input type="text" {...register("lastName")}/>
            <input type="number" {...register("age")}/>
            <input type="text" {...register("gender")}/>
            <input type="text" {...register("email")}/>
            <input type="text" {...register("username")}/>
            <input type="text" {...register("phone")}/>
            <input type="text" {...register("password")}/>
                <button> Save</button>
        </form>
            <p>{user?.firstName}</p>
            <p>{user?.lastName}</p>
            <p>{user?.age}</p>
            <p>{user?.gender}</p>
            <p>{user?.email}</p>
            <p>{user?.username}</p>
            <p>{user?.phone}</p>
            <p>{user?.password}</p>
            </>

    );
};

export {NewUserFormComponent};
