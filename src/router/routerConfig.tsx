import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layout/MainLayout";
import {HomePage} from "../pages/HomePage";
import {TodosComponent} from "../components/TodosComponent";
import {PhotosComponent} from "../components/PhotosComponent";
import {AlbumsComponent} from "../components/AlbumsComponent";
import {PostsPage} from "../pages/PostsPage";
import {CommentsPage} from "../pages/CommentsPage";
import {UsersPage} from "../pages/UsersPage";
import {PostsOfUserPage} from "../pages/PostOfUserPage";
import {CommentsOfPostPage} from "../pages/CommentsOfPostPage";

export const routerConfig = createBrowserRouter(
    [
        {path: '/', element: <MainLayout/>, children: [
                {path: 'users', element: <UsersPage/>, children :[
                        {path: ':id/posts', element: <PostsOfUserPage/>, children: [
                                {path: ':postId/comments', element: <CommentsOfPostPage/>}
                            ]}
                    ]},
                {index: true, element: <HomePage/>},
                {path: 'posts', element: <PostsPage/>},
                {path: 'comments', element: <CommentsPage/>},
                {path: 'todos', element: <TodosComponent/>},
                {path: 'albums', element: <AlbumsComponent/>},
                {path: 'photos', element: <PhotosComponent/>}
            ]}
    ]
)
