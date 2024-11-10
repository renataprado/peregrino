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
    <div style={{ width: "600px", height: "600px"}}>
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
    position: { lat: -23.59611, lng: -46.60297 },
    text: "Date chique",
    desc: "🍝",
    color: "#f2e494"
  },
  {
    position: { lat: -23.59317, lng: -46.61412 },
    text: "Aquário! 🐻‍❄️",
    desc: "🐻‍❄️",
    color: "#77b0e6"
  },
];

const MapLoader = () => {
  return (
    <APIProvider apiKey={key}>
      <Map
        mapId={"peregrino-map"}
        style={{ width: "100%", height: "100%" }}
        defaultCenter={{ lat: -23.58825, lng: -46.603831 }}
        defaultZoom={13}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
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
              borderColor = {"#636363"} 
              scale={1.4}>
              {desc}
            </Pin>
          </AdvancedMarker>
        ))}
      </Map>
    </APIProvider>
  );
};

export default PinnedMap;

//        mapTypeId={"hybrid"}