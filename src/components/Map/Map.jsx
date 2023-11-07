import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [5, -5],
        scale: 1200,
      }}
      className="w-full h-full opacity-[15%] pointer-events-none"
    >
      <Geographies
        geography="/features.json"
        fill="#0b6a9161"
        stroke="#fff"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default Map;
