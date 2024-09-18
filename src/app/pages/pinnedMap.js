'use client'

import {useEffect, useRef} from 'react';
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';

const key = 'AIzaSyAXIDFceYnPXUyPs4xjT3Omh4Ws8X7hV3E';

export const PinnedMap = () => {
  return (
    <div style={{width: "800px"}}>
      Map
      <MapLoader />
    </div>
  )
}

const MapLoader = () => {
  return (
    <APIProvider apiKey={key}>
      <Map
        style={{width: '100vw', height: '100vh'}}
        defaultCenter={{lat: -23.54693, lng: -46.51640}}
        defaultZoom={12}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      >
                <Marker
          position={{lat: -23.58374, lng:  -46.57464}}
          clickable={true}
          onClick={() => alert('marker was clicked!')}
          title={'clickable google.maps.Marker'}
        />

        </Map>
    </APIProvider>
  )
}

export default MapLoader;
