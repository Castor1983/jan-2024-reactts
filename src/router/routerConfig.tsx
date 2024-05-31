import {createBrowserRouter} from "react-router-dom";
import React from "react";
import {MainLayout} from "../layout/MainLayout";

export const routerConfig = createBrowserRouter(
    [
        {path: '/', element: <MainLayout/>}
    ]
)
