import { Marker, Popup } from "react-leaflet";
import { IconLocation } from "./IconLocation";
import { deleteVehiculo } from "../api/deleteVehiculo";

export const Markers = (promps) => {

    const { data } = promps
    
    const handleDelete = async (id, e) => {
        e.preventDefault();

        const message = await deleteVehiculo(id, data[1])

        console.log(message)

    }

    const markers = data[0].map((vehiculo) => (
        
        <Marker key = {vehiculo.id} position={ [vehiculo.latitud, vehiculo.longitud] }  icon = {IconLocation}>
            <Popup>
                {vehiculo.latitud}, {vehiculo.longitud} <br/>
                <button onClick= {e => handleDelete(vehiculo.id, e)} >Eliminar</button>
            </Popup>
        </Marker>
    ));
    
    return markers;
}