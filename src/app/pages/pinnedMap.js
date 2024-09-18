"use client";

import { useEffect, useRef } from "react";
import {
  APIProvider,
  Map,
  Marker,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";

const key = "AIzaSyAXIDFceYnPXUyPs4xjT3Omh4Ws8X7hV3E";

export const PinnedMap = () => {
  return (
    <div style={{ width: "800px" }}>
      Map
      <MapLoader />
    </div>
  );
};
const places = [
  {
    position: { lat: -23.58374, lng: -46.57464 },
    text: "Primeiro date",
    desc: "👩‍❤️‍👨"
  },
  {
    position: { lat:  -23.58869, lng: -46.57548 },
    text: "Segundo date Matrona",
    desc: " "
  },
  {
    position: { lat: -23.59317, lng: -46.61412 },
    text: "Aquário!",
    desc: "🐻‍❄️",
    color: "#c5eefc"
  },
];

const MapLoader = () => {
  return (
    <APIProvider apiKey={key}>
      <Map
        mapId={"peregrino-map"}
        style={{ width: "100vw", height: "100vh" }}
        defaultCenter={{ lat: -23.54693, lng: -46.5164 }}
        defaultZoom={12}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
        mapTypeId={"hybrid"}
      >
        {places.map(({ position, label, text, desc, color }, i) => (
          <AdvancedMarker
            key={i}
            position={{...position}}
            title={label}
            clickable={true}
            onClick={() => alert(text)}
          >
            <Pin 
              background={color ? color : "#fcc5f7"} 
              borderColor = {color ? color : "#fcc5f7"} 
              scale={1.4}>
              {desc}
            </Pin>
          </AdvancedMarker>
        ))}
      </Map>
    </APIProvider>
  );
};

export default MapLoader;