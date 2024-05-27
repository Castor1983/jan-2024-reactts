import React from 'react';
import {useRequest} from "../../hooks/useRequest";
import {UserComponent} from "./UserComponent";

const UsersComponent = () => {
    const users = useRequest()
    return (
        <div>
            users.map(user => <UserComponent key={user.} user={user} />)
        </div>
    );
};

export {UsersComponent};
