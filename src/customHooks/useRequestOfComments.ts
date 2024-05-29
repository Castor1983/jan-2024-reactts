import {useEffect, useState} from "react";
import {ICommentModel} from "../models/ICommentModel";
import {request} from "../services/api.service";

export const useRequestOfComments = () =>{
    const [comments, setComments] = useState<ICommentModel[]>([])
    useEffect(() => {
request.comments.getAllComments().then(value => setComments(value.data))
    }, []);
    return comments
}
