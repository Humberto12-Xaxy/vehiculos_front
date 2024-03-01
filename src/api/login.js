import axios from "axios";

export const login = (credentials) => {
    return axios.post('http://127.0.0.1:8000/login', {
        username : credentials.username,
        password : credentials.password
    })
}