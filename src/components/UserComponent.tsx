import React, {FC} from 'react';
import {IUserModel} from "../models/IUserModel";
import {useContextProvider} from "../context/ContextProvider";
interface IProps {
    user: IUserModel
}
const UserComponent: FC <IProps> = ({user}) => {
    const {userStore: {favoriteUser}} = useContextProvider();
    return (
        <div>
            {user.id}
            {user.name}
            <button onClick={() => favoriteUser(user)}>username</button>
        </div>
    );
};

export {UserComponent};
