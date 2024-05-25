import React from 'react';
import {useRequest} from "../../hooks/useRequest";

const UsersComponent = () => {
    const users = useRequest()
    return (
        <div>
            users.map(user => )
        </div>
    );
};

export {UsersComponent};
