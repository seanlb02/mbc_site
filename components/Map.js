import Head from 'next/head'
import Image from 'next/image'


import { useContext } from "react";
import { Router, useRouter } from "next/router";



import React, { useState, useEffect, useRef } from 'react';


import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
import 'mapbox-gl/dist/mapbox-gl.css';

// import Map from 'react-map-gl';

import MapboxMap from './Mapbox';



const testResource = {
    type: "Feature",
    geometry: {
        type: "Point",
        coordinates: [151.17835, -33.91318]
    },
    properties: {
        username: "user1",
        is_ent: false,
        text: "This is the first note ever to be writen on this app",
        category: "nothing",
        timestamp: Date.now(),
        likes: [{username: "Jane"}, {username: "John"}]
    }

}





export default function Map({latitude, longitude}) {

    const router = useRouter()

    const geolocationAPI = navigator.geolocation;
    const [long, setLong] = useState("");
    const [noGPS, setNoGPS] = useState(false);
    
    // var map = new mapboxgl.Map({
    //   container: 'map1',
    //   style: 'mapbox://styles/mapbox/streets-v11',
    //   center: [long, lat],
    //   zoom: 10
    // });

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(144.96332000);
    const [lat, setLat] = useState(-37.81400000);
    const [zoom, setZoom] = useState(18);


return (

    <div className={styles.pageContainer}>
        <MapboxMap latitude={-33.89408834621491} longitude={151.17954556766304}/>
    </div>
) 
}
const styles = {
    pageContainer: " h-full w-full",
}