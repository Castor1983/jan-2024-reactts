import React, {FC} from 'react';
import {IUserModel} from "../models/IUserModel";
import {NavLink} from "react-router-dom";

interface IProps {
    user: IUserModel
}
const UserComponent: FC<IProps> = ({user}) => {
    return (
        <div>
            <NavLink to={user.id.toString()+'/posts'}>{user.name}</NavLink>
        </div>
    );
};

export {UserComponent};
