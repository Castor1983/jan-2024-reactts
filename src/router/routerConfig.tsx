import {createBrowserRouter} from "react-router-dom";
import React from "react";
import {MainLayout} from "../layout/MainLayout";
import {AuthPage} from "../pages/AuthPage";
import {CarsPage} from "../pages/CarsPage";

export const routerConfig = createBrowserRouter(
    [
        {path: '/',
            element: <MainLayout/>,
            errorElement: <h1>wtf are you doing maaaaan????</h1>,
            children: [
                {index: true, element: <AuthPage/>},
                {path: 'cars', element: <CarsPage/>}
        ]}
    ]
)
