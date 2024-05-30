import React from 'react';
import {useRequestOfUsers} from "../customHooks/useRequestOfUsers";
import {UserComponent} from "./UserComponent";

const UsersComponent = () => {
    const users = useRequestOfUsers()
    return (
        <div>
            {users.map(user => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export {UsersComponent};
