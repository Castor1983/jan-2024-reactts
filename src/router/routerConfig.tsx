import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layout/MainLayout";
import {UsersComponent} from "../components/UsersComponent";
import {HomePage} from "../pages/HomePage";
import {PostsComponent} from "../components/PostsComponent";
import {CommentsComponent} from "../components/CommentsComponent";
import {TodosComponent} from "../components/TodosComponent";
import {PhotosComponent} from "../components/PhotosComponent";
import {AlbumsComponent} from "../components/AlbumsComponent";

export const routerConfig = createBrowserRouter(
    [
        {path: '/', element: <MainLayout/>, children: [
                {path: 'users', element: <UsersComponent/>},
                {index: true, element: <HomePage/>},
                {path: 'posts', element: <PostsComponent/>},
                {path: 'comments', element: <CommentsComponent/>},
                {path: 'todos', element: <TodosComponent/>},
                {path: 'albums', element: <AlbumsComponent/>},
                {path: 'photos', element: <PhotosComponent/>}
            ]}
    ]
)
