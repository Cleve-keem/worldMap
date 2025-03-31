import { useState } from "react";

function useGeolocator() {
  const [position, setPosition] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  function getLocation() {
    setIsLoading(true);
    if (!navigator.geolocation) {
      console.log("Your bowser no support geolocator");
    }

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
