import { MapContainer } from "react-leaflet";
import "./leaflet.css";
import Tiles from "./Tiles";
import DisplayGeoJSON from "./DisplayGeoJSON";
import DisplayMarkers from "./DisplayMarkers";
import ControlLayers from "./LayersControl";
import ControlZoom from "./ControlZoom";
import Info from "./Info";
import MarkersProvider from "../../context/Markers/MarkersProvider";
function Mapa() {
  return (
    <MapContainer
      className="h-screen w-screen z-0"
      center={[-38.9100392105676, -62.3851335705486]}
      zoom={4}
      scrollWheelZoom={true}
      zoomControl={false}
      attributionControl={false}
      zoomSnap={0.5}
      doubleClickZoom={false}
    >
      <ControlZoom />
      <Tiles />
      <DisplayGeoJSON />
      <MarkersProvider>
        <ControlLayers />
        <DisplayMarkers />
        <Info />
      </MarkersProvider>
    </MapContainer>
  );
}

export default Mapa;