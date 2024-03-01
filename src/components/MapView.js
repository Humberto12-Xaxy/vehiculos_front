import React, { useEffect, useState } from "react";

import { MapContainer, TileLayer } from "react-leaflet";

import 'leaflet/dist/leaflet.css'
import { Markers } from "./Markers";

import { getAllVehiculos } from "../api/getAllVehiculos";

const MapView = (promps) =>{
    const token = promps.data[0]
    const id = promps.data[1]
    const [vehiculos, setVehiculos] = useState([]); 

    useEffect(()=>{
        async function loadVehiculos(){
            const res =  await getAllVehiculos(token, id)
            setVehiculos(res.data)
        }
        
        loadVehiculos()
    }, [])
    
    return <MapContainer center = {{lat : '15.934901', lng : '-93.784351'}} zoom = {13}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Markers data = {[vehiculos, token]} />
    </MapContainer>
}

export default MapView;