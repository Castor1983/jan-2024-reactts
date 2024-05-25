import {useEffect, useState} from "react";
import {request} from "../services/requestService";



export const useRequest = () => {
    const [response, setResponse] = useState()
    useEffect(() => {
request.users.getAllUsers().then(({data}) => setResponse(data.users))
    }, []);
    return response
}
