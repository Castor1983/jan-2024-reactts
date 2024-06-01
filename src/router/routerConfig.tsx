import {createBrowserRouter} from "react-router-dom";
import React from "react";
import {MainLayout} from "../layout/MainLayout";
import {AuthPage} from "../pages/AuthPage";
import {CarsPage} from "../pages/CarsPage";
import {NewUserPage} from "../pages/NewUserPage";

export const routerConfig = createBrowserRouter(
    [
        {path: '/', element: <MainLayout/>, errorElement: <h1>Sergey NOOOOObasik</h1>,
        children:[
            {index: true, element: <AuthPage/>},
            {path: 'newAccount', element: <NewUserPage/>},
            {path: 'cars', element: <CarsPage/>}
        ]}
    ]
)
