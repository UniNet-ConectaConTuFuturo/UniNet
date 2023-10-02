import "leaflet/dist/leaflet.css";
import { Suspense, lazy } from "react";

import MapaProvider from "../../context/Mapa/MapaProvider";
import { MapContainer } from "react-leaflet";

const ControlZoom = lazy(() => import("./OutMapComponents/ControlZoom"));
import Tiles from "./InMapComponents/Tiles";
const DisplayGeoJSON = lazy(() =>
  import("./InMapComponents/geoJSON/DisplayGeoJSON")
);
const DisplayMarkers = lazy(() =>
  import("./InMapComponents/Markers/DisplayMarkers")
);

const Filters = lazy(() => import("./OutMapComponents/Filters/Filters"));
const Options = lazy(() => import("./OutMapComponents/Options/Options"));
const GeoInfo = lazy(() => import("./OutMapComponents/GeoInfo"));
const AsideInfo = lazy(() => import("./OutMapComponents/AsideInfo"));
function Mapa() {
  return (
    <MapaProvider>
      <MapContainer
        className="h-screen w-screen z-0"
        attributionControl={false}
        center={[-34.66, -58.5]}
        zoomControl={false}
        doubleClickZoom={false}
        zoom={11}
        zoomDelta={0.25}
        zoomSnap={0}
      >
        <Suspense>
          <ControlZoom />
        </Suspense>
        <Tiles />
        <Suspense>
          <DisplayGeoJSON />
        </Suspense>
        <Suspense>
          <DisplayMarkers />
        </Suspense>
      </MapContainer>
      <Suspense>
        <Filters />
        <Options />
        <GeoInfo />
        <AsideInfo />
      </Suspense>
    </MapaProvider>
  );
}

export default Mapa;
