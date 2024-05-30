import {useEffect, useState} from "react";
import {request} from "../services/api.service";
import {ICommentModel} from "../models/ICommentModel";

export const useRequestOfCommentsByPostId = (id: string | undefined) =>{
    const [comments, setComments] = useState<ICommentModel[]>([])
    useEffect(() => {
        if(id){
            request.posts.getCommentsByPostId(id).then(value => setComments(value.data))
        }
    }, [id]);
    return comments
}
