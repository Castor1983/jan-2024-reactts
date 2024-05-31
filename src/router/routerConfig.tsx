import {createBrowserRouter} from "react-router-dom";
import React from "react";
import {MainLayout} from "../layout/MainLayout";
import {AuthPage} from "../pages/AuthPage";
import {CarsPage} from "../pages/CarsPage";

export const routerConfig = createBrowserRouter(
    [
        {path: '/', element: <MainLayout/>, errorElement: <h1>Sergey NOOOOObasik</h1>,
        children:[
            {path: '/', element: <AuthPage/>},
            {path: 'cars', element: <CarsPage/>}
        ]}
    ]
)
