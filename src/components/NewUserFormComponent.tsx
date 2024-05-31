import React from 'react';
import {useForm} from "react-hook-form";
import {AuthDataModel} from "../models/AuthDataModel";
import {userService} from "../services/api.service";

const NewUserFormComponent = () => {
    const {register, handleSubmit    }=useForm<AuthDataModel>({defaultValues:{username: 'userSZ1', password: 'P@$$word1'}})
    const addNewUser =(user: AuthDataModel) => {
       const NewUser = userService.createNewUser(user).then(user => console.log(user))
    }
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
