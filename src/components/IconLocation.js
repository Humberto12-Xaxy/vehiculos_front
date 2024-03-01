import icon from '../assets/venue_location_icon.svg'
import L from "leaflet";

export const IconLocation = L.icon({
    iconUrl : icon,
    iconRetinaUrl : icon,
    iconSize : [35,35],
    className : 'Leafle-venue-icon'
})

