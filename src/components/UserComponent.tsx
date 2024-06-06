import React, {FC} from 'react';
import {IUserModel} from "../models/IUserModel";
import {useStore} from "../context/store";

interface IProps {
    user: IUserModel
}
const UserComponent: FC <IProps> = ({user}) => {
const {userStore:{setFavoriteUser}} = useStore();
    return (
        <div>
            {user.id}
            {user.name}
            <button onClick={() => setFavoriteUser(user)}>username</button>
        </div>
    );
};

export {UserComponent};
