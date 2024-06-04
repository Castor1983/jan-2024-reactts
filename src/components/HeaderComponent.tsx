import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li><NavLink to={'users'}>users page</NavLink></li>
                <li><NavLink to={'posts'}> posts page</NavLink> </li>
                <li><NavLink to={'userPosts'}> user with posts page</NavLink></li>
            </ul>
        </div>
    );
};

export {HeaderComponent};
