import React, { useEffect } from 'react';

function MapContainer() {
  useEffect(() => {
    const googleMapsScript = document.createElement('script');
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBLmisodBC3rY8DwPZTL1SE4NxmsbpAUFQ&libraries=places`;
    googleMapsScript.async = true;
    googleMapsScript.defer = true;
    googleMapsScript.onload = initializeMap;
    googleMapsScript.onerror = handleScriptError;
    document.head.appendChild(googleMapsScript);

    return () => {
      document.head.removeChild(googleMapsScript);
    };
  }, []);

  const initializeMap = () => {
    const mapOptions = {
      center: {
        lat: 40.323464,
        lng: 36.552193,
      },
      zoom: 4,
    };

    const mapElement = document.getElementById('map');

    if (mapElement) {
      new window.google.maps.Map(mapElement, mapOptions);
    } else {
      console.error("Map container element not found.");
    }
  };

  const handleScriptError = () => {
    console.error("Failed to load Google Maps API script.");
  };

  return (
    <div id="map" style={{ width: "100%", height: "400px" }}></div>
  );
}

export default MapContainer;
