import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li><NavLink to={'newAccount'}>new account page</NavLink> </li>
                <li><NavLink to={'/'}>login page</NavLink> </li>
                <li><NavLink to={'cars'}>cars page</NavLink> </li>
            </ul>
        </div>
    );
};

export {HeaderComponent};
