import React from 'react';
import {useForm} from "react-hook-form";
import {AuthDataModel} from "../models/AuthDataModel";

const NewUserFormComponent = () => {
    const {register, handleSubmit    }=useForm<AuthDataModel>({defaultValues:{username: 'userSZ1', password: 'P@$$word1'}}
    const addNewUser = userService.createNewUser()
    return (
        <div>
            <h3>New user form`</h3>

            <form onSubmit={handleSubmit(addNewUser)}>
                <input type="text"  {...register("username")}/>
                <input type="text"  {...register("password")}/>
                <button>add</button>
            </form>
        </div>
    );
};

export {NewUserFormComponent};
