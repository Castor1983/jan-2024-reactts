import React, {useEffect, useMemo, useState} from 'react';
import {useContextProvider} from "../context/ContextProvider";
import {UserWithPostsType} from "../models/UserWithPostsType";
import {UserPostsComponent} from "./UserPostsComponent";

const UsersPostsComponent = () => {
    const {postStore: {allPosts}, userStore: {allUsers}} = useContextProvider();
    const [userWithPostsState, setUserWithPostsState] = useState<UserWithPostsType[]>([])
    const userWithPostsArray = useMemo ( ()=> {
        return allUsers.map(user => {
            return {...user, posts: allPosts.filter(post => post.userId === user.id)}
        })
    }, [allPosts, allUsers])
    console.log(userWithPostsArray)
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
