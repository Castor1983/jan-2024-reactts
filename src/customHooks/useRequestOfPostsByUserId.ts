import {useEffect, useState} from "react";
import {IPostModel} from "../models/IPostModel";
import {request} from "../services/api.service";

export const useRequestOfPostsByUserId = (id: string | undefined) =>{
    const [posts, setPosts] = useState<IPostModel[]>([])
    useEffect(() => {
        if(id){
            request.users.getPostsByUserId(id).then(value => setPosts(value.data))
        }
    }, [id]);
    return posts
}
