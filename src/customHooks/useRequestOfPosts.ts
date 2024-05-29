import {useEffect, useState} from "react";
import {IPostModel} from "../models/IPostModel";
import {request} from "../services/api.service";

export const useRequestOfPosts = () =>{
    const [posts, setPosts] = useState<IPostModel[]>([])
    useEffect(() => {
request.posts.getAllPosts().then(value => setPosts(value.data))
    }, []);
    return posts
}
