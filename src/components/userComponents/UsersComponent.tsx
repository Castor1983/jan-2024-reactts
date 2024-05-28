import React, {FC} from 'react';
import {useRequestOfUsers} from "../../hooks/useRequest";
import {UserComponent} from "./UserComponent";
import {IUserModel} from "../../models/userModels/IUserModel";

interface Iprops {
    chooseUser: (id: number)=> void
}
const UsersComponent: FC<Iprops> = ({chooseUser}) => {
    const users: IUserModel[] = useRequestOfUsers()
    return (
        <div>
            {users.map((user: IUserModel) => <UserComponent key={user.id} user={user} chooseUser={chooseUser}/>)}
        </div>
    )
};

export {UsersComponent};
