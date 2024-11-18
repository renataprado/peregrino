"use client";

import { useEffect, useRef, useState } from "react";
import {
  APIProvider,
  Map,
  Marker,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";
import { Button } from "primereact/button";

import { ListBox } from "primereact/listbox";

const key = "AIzaSyAXIDFceYnPXUyPs4xjT3Omh4Ws8X7hV3E";

export const PinnedMap = () => {
  const [selectedPlace, setSelectedPlace] = useState();
  
  return (
    <div style={{ width: "100wv", height: "100vh" }}>
      Map
      <div style={{ display: "flex" }}>
        <MapLoader places={places} selectedPlace={selectedPlace}/>
        <PlaceList places={places} selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace}/>
      </div>
    </div>
  );
};
const places = [
  {
    position: { lat: -23.58374, lng: -46.57464 },
    text: "Primeiro date",
    desc: "👩‍❤️‍👨",
  },
  {
    position: { lat: -23.58869, lng: -46.57548 },
    text: "Segundo date Matrona",
    desc: " ",
  },
  {
    position: { lat: -23.59611, lng: -46.60297 },
    text: "Date chique",
    desc: "🍝",
    color: "#f2e494",
  },
  {
    position: { lat: -23.59317, lng: -46.61412 },
    text: "Aquário! 🐻‍❄️",
    desc: "🐻‍❄️",
    color: "#77b0e6",
  },
];

const PlaceList = ({ places, selectedPlace, setSelectedPlace }) => {

  const placeTemplate = (option) => {
    return (
      <div className="flex align-items-center">
        <div>{option.text}</div>
      </div>
    );
  };
  return (
    <>
      <div className="placeList__container">
        <ListBox
          value={selectedPlace}
          onChange={(e) => setSelectedPlace(e.value)}
          options={places}
          optionLabel="text"
          className="w-full md:w-14rem"
          itemTemplate={placeTemplate}
        />
      </div>

      {/* <div className="placeList__container">
        { places.map((p) => (
          <div>{p.text}</div>
        ))}
      </div> */}
    </>
  );
};

const MapLoader = ({places, selectedPlace}) => {

  const renderPlaces = () => {
    if(selectedPlace) return [selectedPlace]
    return places
  }

  return (
    <APIProvider apiKey={key}>
      <Map
        mapId={"peregrino-map"}
        style={{ width: "500px", height: "500px" }}
        defaultCenter={{ lat: -23.58825, lng: -46.603831 }}
        defaultZoom={13}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      >
        {renderPlaces().map(({ position, label, text, desc, color }, i) => (
          <AdvancedMarker
            key={i}
            position={{ ...position }}
            title={label}
            clickable={true}
            onClick={() => alert(text)}
          >
            <Pin
              background={color ? color : "#fcc5f7"}
              borderColor={"#636363"}
              scale={1.4}
            >
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
