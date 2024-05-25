import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {'content-type': 'application/json; charset=UTF-8'}
})

let request = {
    users: {
        getAllUsers
    }
}
