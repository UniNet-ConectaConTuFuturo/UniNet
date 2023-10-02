import { GeoJSON } from "react-leaflet";
import { useRef } from "react";
import useGeoJson from "../../../../hooks/useGeoJson";
import provincias from "../../../../geoJSON/provincia.json";
import departamentos from "../../../../geoJSON/departamentos.json";
function DisplayProvincias() {
  const { onEachFeature, depRef } = useGeoJson();
  const className = {
    fillOpacity: 0,
    color: "#aaa",
    opacity: 1,
    weight: 2,
    lineJoin: "round",
  };
  console.log("provincias");
  const geoRef = useRef();
  return (
    <GeoJSON
      ref={geoRef}
      style={className}
      eventHandlers={{
        mouseover: () => {
          if (depRef.current) {
            depRef.current.clearLayers();
            depRef.current.addData(departamentos);
          }
        },
      }}
      onEachFeature={(feature, layer) => onEachFeature(feature, layer, geoRef)}
      data={provincias["features"]}
    />
  );
}
export default DisplayProvincias;