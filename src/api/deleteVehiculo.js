import axios from 'axios'


export const deleteVehiculo = (id, token) =>{

    return axios.delete(`http://127.0.0.1:8000/api/vehiculos/${id}/`,{
        headers: {
            'Authorization': `Token ${token}`
        }
    })
}