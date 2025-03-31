import { useState } from "react";

function useGeolocator(defaultPosition = null) {
  const [position, setPosition] = useState(defaultPosition);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function getLocation() {
    if (!navigator.geolocation) {
      console.log("Your bowser no support geolocator");
    }

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setIsLoading(false);
      },
      function (error) {
        console.error(error.message);
        setIsLoading(false);
        setError(error.message);
      }
    );
  }
  return { getLocation, position, isLoading, error };
}

export default useGeolocator;
