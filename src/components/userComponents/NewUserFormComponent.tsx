import React, {FC, useState} from 'react';
import {useForm} from "react-hook-form";
import {useRequestNewUser} from "../../hooks/useRequest";
export interface IProps {
    firstName: string
    lastName: string,
    age: number,
    gender: string,
    email: string,
    phone: string,
    username: string,
    password: string,
}
const NewUserFormComponent:FC<any>= () => {
    let{register, handleSubmit}=useForm<IProps>()
    //const [formValues, setFormValues] = useState<IProps>()
    const newUser = useRequestNewUser(form).th
    return (
        <>
        <form onSubmit={handleSubmit (newUser)}>
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
            {newUser?.age}
            </>

    );
};

export {NewUserFormComponent};
