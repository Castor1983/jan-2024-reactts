import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layout/MainLayout";
import {UsersComponent} from "../components/UsersComponent";
import {HomePage} from "../pages/HomePage";
import {PostsComponent} from "../components/PostsComponent";
import {CommentsComponent} from "../components/CommentsComponent";

export const routerConfig = createBrowserRouter(
    [
        {path: '/', element: <MainLayout/>, children: [
                {path: 'users', element: <UsersComponent/>},
                {index: true, element: <HomePage/>},
                {path: 'posts', element: <PostsComponent/>},
                {path: 'comments', element: <CommentsComponent/>}
            ]}
    ]
)
