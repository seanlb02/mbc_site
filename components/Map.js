import Head from "next/head";
import Image from "next/image";

import { useContext } from "react";
import { Router, useRouter } from "next/router";

import React, { useState, useEffect, useRef } from "react";

import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
import "mapbox-gl/dist/mapbox-gl.css";

// import Map from 'react-map-gl';

import MapboxMap from "./Mapbox";

export default function Map({ latitude, longitude }) {
  const router = useRouter();

  const geolocationAPI = navigator.geolocation;
  const [long, setLong] = useState("");
  const [noGPS, setNoGPS] = useState(false);
  const [showMap, setShowMap] = useState(false);

  // var map = new mapboxgl.Map({
  //   container: 'map1',
  //   style: 'mapbox://styles/mapbox/streets-v11',
  //   center: [long, lat],
  //   zoom: 10
  // });

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(144.96332);
  const [lat, setLat] = useState(-37.814);
  const [zoom, setZoom] = useState(18);

  useEffect(() => {
    setTimeout(() => {
      setShowMap(true);
    }, "2000");
  }, []);

  return (
    <div className={styles.pageContainer}>
      {showMap ? (
        <MapboxMap
          latitude={-33.89408834621491}
          longitude={151.17954556766304}
        />
      ) : (
        <img src="/loading.gif"></img>
      )}
    </div>
  );
}
const styles = {
  pageContainer: " h-full w-full",
};
