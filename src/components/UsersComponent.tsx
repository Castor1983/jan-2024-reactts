import React from 'react';
import {useRequestOfUsers} from "../customHooks/useRequestOfUsers";

const UsersComponent = () => {
    const users = useRequestOfUsers()
    return (
        <div>
            {users.map(user => <div>{user.name}</div>)}
        </div>
    );
};

export {UsersComponent};
