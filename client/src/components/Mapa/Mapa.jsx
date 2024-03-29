import "leaflet/dist/leaflet.css";
import { Suspense, lazy } from "react";

import MapaProvider from "./MapaProvider";
import { MapContainer } from "react-leaflet";

const ControlZoom = lazy(() => import("./OutMapComponents/ControlZoom"));
import Tiles from "./InMapComponents/Tiles";
import PositionController from "./InMapComponents/PositionController";
import { useParams } from "react-router-dom";
const DisplayGeoJSON = lazy(() =>
  import("./InMapComponents/geoJSON/DisplayGeoJSON")
);
const DisplayMarkers = lazy(() =>
  import("./InMapComponents/Markers/DisplayMarkers")
);
const Filters = lazy(() => import("./OutMapComponents/Filters/Filters"));
const Options = lazy(() => import("./OutMapComponents/Options/Options"));
const GeoInfo = lazy(() => import("./OutMapComponents/GeoInfo"));
const AsideInfo = lazy(() => import("./OutMapComponents/AsideInfo/AsideInfo"));

function Mapa() {
  const { xyz } = useParams();
  const [x, y, z] = xyz ? xyz.slice(1, -1).split(",") : new Array(3);
  return (
    <MapaProvider>
      <MapContainer
        className="h-screen w-screen z-0"
        attributionControl={false}
        center={[x || -34.66, y || -58.5]}
        zoomControl={false}
        doubleClickZoom={false}
        wheelDebounceTime={100}
        zoom={z || 11}
        zoomDelta={0.5}
        zoomSnap={0}
      >
        <PositionController />
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
