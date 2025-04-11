import { createContext, useContext, useEffect, useReducer } from "react";

const BASE_URL = "http://localhost:5000"; // Base url

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "isLoading":
      return { ...state, isLoading: true };

    case "cities/loaded":
      return { ...state, isLoading: false, cities: action.payload };

    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };

    case "city/loaded":
      return { ...state, isLoading: false, currentCity: action.payload };

    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities.filter((city) => city.id !== action.payload)],
        currentCity: {},
      };

    case "rejected":
      return { ...state, isLoading: false, error: action.payload };

    default: {
      return state;
    }
  }
}

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function fetchCities() {
      try {
        dispatch({ type: "isLoading" });
        const res = await fetch(`${BASE_URL}/cities`);

        const data = await res.json();
        // console.log(data);
        dispatch({ type: "cities/loaded", payload: data });
      } catch (err) {
        console.log(err.message);
        dispatch({
          type: "rejected",
          payload: "There was an error loading data",
        });
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      dispatch({ type: "isLoading" });
      const res = await fetch(`${BASE_URL}/cities/${id}`);

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      dispatch({ type: "city/loaded", payload: data });
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: "rejected",
        payload: "There was an error getting city",
      });
    }
  }

  async function createCity(newCityData) {
    try {
      dispatch({ type: "isLoading" });
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCityData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      dispatch({ type: "city/created", payload: data });
    } catch (err) {
      dispatch({ type: "rejected", payload: "There was error creating city" });
    }
  }

  async function deleteCity(id) {
    try {
      dispatch({ type: "isLoading" });
      await fetch(`${BASE_URL}/cities/${id}`, { method: "DELETE" });

      dispatch({ type: "city/deleted", payload: id });
    } catch (err) {
      console.log(err.message);
      dispatch({ type: "rejected", payload: "There was error deleting city" });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        getCity,
        currentCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  return context;
}

export { CitiesProvider, useCities };
