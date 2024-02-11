"use client";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import geoJSON from "./chicago-parks";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFyY2h1Z3VldGFyY2FsYXNrYSIsImEiOiJja2tpMHV0bXYyMGN2Mm9vYzkwYjJ2eXA1In0.wk3HCpEh4Ct9T_7eFO6Jrg";

export default function App() {
  const mapContainerRef = useRef<any>(null);
  const map = useRef<any>(null);
  const [lng, setLng] = useState(1.6);
  const [lat, setLat] = useState(42.54);
  const [zoom, setZoom] = useState(10.5);

  // useEffect(() => {
  //   if (map.current) return; // initialize map only once
  //   map.current = new mapboxgl.Map({
  //     container: mapContainer.current,
  //     style: "mapbox://styles/mapbox/streets-v12",
  //     center: [lng, lat],
  //     zoom: zoom,
  //   });

  //   // Add our navigation control (the +/- zoom buttons)
  //   map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

  //   map.current.on("load", () => {
  //     // Nifty code to force map to fit inside container when it loads
  //     map.current.resize();

  //     map.current.addSource("earthquakes", {
  //       type: "geojson",
  //       // Use a URL for the value for the `data` property.
  //       data: "https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson",
  //     });

  //     map.current.addLayer({
  //       id: "earthquakes-layer",
  //       type: "circle",
  //       source: "earthquakes",
  //       paint: {
  //         "circle-radius": 4,
  //         "circle-stroke-width": 2,
  //         "circle-color": "red",
  //         "circle-stroke-color": "white",
  //       },
  //     });
  //   });

  //   map.current.on("move", () => {
  //     setLng(map.current.getCenter().lng.toFixed(4));
  //     setLat(map.current.getCenter().lat.toFixed(4));
  //     setZoom(map.current.getZoom().toFixed(2));
  //   });
  // });

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-87.65, 41.84],
      zoom: 10,
    });

    map.on("load", function () {
      // Add an image to use as a custom marker
      map.loadImage(
        "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
        function (error, image) {
          if (error || !image) throw error;
          map.addImage("custom-marker", image);
          // Add a GeoJSON source with multiple points
          map.addSource("points", {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: geoJSON,
            },
          });
          // Add a symbol layer
          map.addLayer({
            id: "points",
            type: "symbol",
            source: "points",
            layout: {
              "icon-image": "custom-marker",
              // get the title name from the source's "title" property
              "text-field": ["get", "title"],
              "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
              "text-offset": [0, 1.25],
              "text-anchor": "top",
            },
          });
        }
      );
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Clean up on unmount
    return () => map.remove();
  }, []);

  return (
    <>
      <div className="h-screen w-9/12 relative">
        <div className="absolute z-10">
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
        <div ref={mapContainerRef} className="h-full" />
      </div>
    </>
  );
}

// https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson
// https://api.mapbox.com/styles/v1/marchuguetarcalaska/cl617t4b8001914n06m0xqt9n/draft?access_token=pk.eyJ1IjoibWFyY2h1Z3VldGFyY2FsYXNrYSIsImEiOiJja2tpMHV0bXYyMGN2Mm9vYzkwYjJ2eXA1In0.wk3HCpEh4Ct9T_7eFO6Jrg
