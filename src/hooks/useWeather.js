import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../contex";

const useWeather = () => {
    const [weatherData, setWeatherData] = useState({
        location: "",
        climate: "",
        temperature: "",
        maxTemperature: "",
        minTemperature: "",
        himudity: "",
        cloudPercentage: "",
        wind: "",
        time: "",
        longitude: "",
        latitude: "",
    });

    const [loading, setLoading] = useState({
        state: false,
        message: "",
    });
    const [error, setError] = useState(null);

    // searched location data
    const { selectedLocation } = useContext(LocationContext);

    // fetching data
    const fetchingWeatherData = async (latitude, longitude) => {
        try {
            setLoading({
                ...loading,
                state: true,
                message: "Loading wether data....",
            });

            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
                    import.meta.env.VITE_WEATHER_API_KEY
                }&units=metric`
            );
            if (!response.ok) {
                const errorMessage = `Fetching data failed: ${response.status}`;
                throw new Error(errorMessage);
            }
            const data = await response.json();

            const upDatedWeather = {
                ...weatherData,
                location: data?.name,
                climate: data?.weather[0]?.main,
                temperature: data?.main?.temp,
                maxTemperature: data?.main?.temp_max,
                minTemperature: data?.main?.temp_min,
                himudity: data?.main?.humidity,
                cloudPercentage: data?.clouds?.all,
                wind: data?.wind?.speed,
                time: data?.dt,
                latitude: latitude,
                longitude: longitude,
            };
            setWeatherData(upDatedWeather);
        } catch (err) {
            setError(err);
        } finally {
            setLoading({
                ...loading,
                state: false,
                message: "",
            });
        }
    };

    useEffect(() => {
        setLoading({
            loading: true,
            message: "Location finding...",
        });

        if (selectedLocation.latitude && selectedLocation.longitude) {
            fetchingWeatherData(
                selectedLocation.latitude,
                selectedLocation.longitude
            );
        } else {
            navigator.geolocation.getCurrentPosition((position) => {
                fetchingWeatherData(
                    position.coords.latitude,
                    position.coords.longitude
                );
            });
        }
    }, [selectedLocation.latitude, selectedLocation.longitude]);

    return {
        weatherData,
        loading,
        error,
    };
};

export default useWeather;
