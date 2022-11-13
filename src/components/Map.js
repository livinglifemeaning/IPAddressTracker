import { MapContainer, TileLayer, Marker} from "react-leaflet";
import classes from "./Map.module.css";


const Map = ({ latitude, longtitude }) => {
  return (
    <div className={classes.map}>
      <MapContainer
       flyTo={[latitude, longtitude]}
        center={[latitude, longtitude]}
        zoom={12}
        scrollWheelZoom={false}
        zoomControl={false}
      >

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[latitude, longtitude]} />
      </MapContainer>
    </div>
  );
};

export default Map;
