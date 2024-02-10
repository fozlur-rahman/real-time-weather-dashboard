import { createContext } from "react";

const WeatherContext = createContext("");
const LocationContext = createContext(null);
const FavoriteContext = createContext(null);

export { FavoriteContext, LocationContext, WeatherContext };
