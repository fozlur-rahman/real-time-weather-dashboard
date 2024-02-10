import { WeatherContext } from "../contex";
import { useWeather } from "../hooks";

function WeatherProvider({ children }) {
    const { weatherData, loading, error } = useWeather();
    return (
        <WeatherContext.Provider value={{ weatherData, loading, error }}>
            {children}
        </WeatherContext.Provider>
    );
}

export default WeatherProvider;
