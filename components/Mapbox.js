import * as React from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import Image from "next/image";

import { useContext, useRef, useEffect, useState } from "react";
import { Router, useRouter } from "next/router";

// import the mapbox-gl styles so that the map is displayed correctly

function MapboxMap({ latitude, longitude }) {
  // this is where the map instance will be stored after initialization
  const [map, setMap] = React.useState();

  // React ref to store a reference to the DOM node that will be used
  // as a required parameter `container` when initializing the mapbox-gl
  // will contain `null` by default
  const mapNode = useRef(null);
  const mapp = useRef(null);
  const [lng, setLng] = useState(longitude);
  const [lat, setLat] = useState(latitude);
  const [zoom, setZoom] = useState(15);

  const [noGPS, setNoGPS] = useState(false);
  const geolocationAPI = navigator.geolocation;

  const [loaded, setLoaded] = useState(true);
  const [imported, setImported] = useState(false);
  const [markerData, setMarkerData] = useState([]);

  useEffect(() => {
    setLng(longitude);
    setLat(latitude);
    console.log(lng, lat);
    const node = mapNode.current;

    if (loaded) {
      mapp.current = new mapboxgl.Map({
        container: node,
        accessToken:
          "pk.eyJ1Ijoic2VhbjEyMzQ1Njc4OSIsImEiOiJjbHBhcTdtdjIwODRxMmxvd3JxdHE1Zms4In0.6PQO6PDIdekSvP3RX41Yhg",
        style: "mapbox://styles/mapbox/standard-beta",
        // style:'mapbox://styles/sean123456789/clpf965kx004g01r88khpd5c6',
        // mapbox://styles/sean123456789/clpf8buor004w01opbir920b1

        // bearing: 75,
        center: [longitude, latitude],
        zoom: zoom,
        pitch: 70,
        attributionControl: false,
      });
      // mapp.current.addControl(new mapboxgl.NavigationControl())
      // save the map object to React.useState

      setMap(mapp.current);
      mapp.current.rotateTo(150, { duration: 7000 });
      setImported(true);
    }
  }, [lat, lng]);

  useEffect(() => {}, []);

  const reCenter = function () {
    console.log("flying");
    mapp.current.flyTo({
      center: [lng, lat],
      zoom: zoom,
      pitch: -90,
      essential: true, // this animation is considered essential with respect to prefers-reduced-motion
    });
  };

  return (
    <>
      <div ref={mapNode} style={{ width: "100%", height: "100%" }}></div>
    </>
  );
}
export default MapboxMap;
