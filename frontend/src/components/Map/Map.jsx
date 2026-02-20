import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./Map.css";

const Map = ({ latitude, longitude, hospitalName }) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!latitude || !longitude) return;

    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

    // If map already exists → just move center
    if (mapRef.current) {
      mapRef.current.setCenter([longitude, latitude]);
      return;
    }

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [longitude, latitude],
      zoom: 14,
    });

    // 🔵 Create SVG Google-style Marker
    const markerEl = document.createElement("div");
    markerEl.className = "custom-pin";

    markerEl.innerHTML = `
      <svg viewBox="0 0 24 36" width="42" height="58">
        <path
          d="M12 0C5.4 0 0 5.4 0 12c0 9 12 24 12 24s12-15 12-24C24 5.4 18.6 0 12 0z"
          fill="#2563eb"
        />
        <circle cx="12" cy="12" r="5" fill="white"/>
      </svg>
    `;

    new mapboxgl.Marker(markerEl).setLngLat([longitude, latitude]).addTo(map);

    // 🏷 Floating Label Above Marker
    new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
      offset: 35,
      className: "label-popup",
    })
      .setLngLat([longitude, latitude])
      .setHTML(`<div class="hospital-label">${hospitalName}</div>`)
      .addTo(map);

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [latitude, longitude, hospitalName]);

  return (
    <div className="map-wrapper">
      <h1 className="map-heading">Hospital Location</h1>
      <div ref={mapContainerRef} className="map" />
    </div>
  );
};

export default Map;
