import React, {FC} from 'react';
import {IUserModel} from "../../models/userModels/IUserModel";
interface IProps {
    user: IUserModel,
    chooseUser: (id: number) => void
}
const UserComponent:FC<IProps> = ({user, chooseUser}) => {
    return (
        <div>
            {user.id}.{user.firstName}
            <button onClick={()=>
            chooseUser(user.id)}>show todos of {user.firstName}</button>
        </div>
    );
};

export {UserComponent};
