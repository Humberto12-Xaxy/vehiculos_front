import axios from "axios";

export const getAllVehiculos = (token, id) => {

    return axios.get(`http://127.0.0.1:8000/api/vehiculos/${id}/`,{
        headers: {
            'Authorization': `Token ${token}`
        }
    })
}