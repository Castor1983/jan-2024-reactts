import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li><link to={'users'} ></link></li>
                <li><link to={'posts'}> posts page</link> </li>
                <li><link to={'userPosts'}> user with posts page</link></li>
            </ul>
        </div>
    );
};

export {HeaderComponent};
