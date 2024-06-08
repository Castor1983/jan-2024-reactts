import React, {useEffect, useMemo, useState} from 'react';
import {UserWithPostsType} from "../../models/UserWithPostsType";
import {UserPostsComponent} from "./UserPostsComponent";
import {useStore} from "../../context/store";

const UsersPostsComponent = () => {
const {postStore:{allPosts}, userStore:{allUsers}} = useStore();
    const [userWithPostsState, setUserWithPostsState] = useState<UserWithPostsType[]>([])
    const userWithPostsArray = useMemo ( ()=> {
        return allUsers.map(user => {
            return {...user, posts: allPosts.filter(post => post.userId === user.id)}
        })
    }, [allPosts, allUsers])
    useEffect(() => {
        setUserWithPostsState(userWithPostsArray)
    }, [userWithPostsArray]);
    return (
        <div>
            {
                userWithPostsState.map(userwithPosts => <UserPostsComponent key={userwithPosts.id} userWithPosts={userwithPosts}/>)
            }
        </div>
    );
};

export {UsersPostsComponent};
