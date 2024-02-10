import { useContext, useEffect, useState } from "react";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { WeatherContext } from "./contex";

// backgrund images
import ClearSkyImage from "./assets/backgrounds/clear-sky.jpg";
import CloudsImage from "./assets/backgrounds/few-clouds.jpg";
import MistImage from "./assets/backgrounds/mist.jpeg";
import RainImage from "./assets/backgrounds/rainy-day.jpg";
import HazeImage from "./assets/backgrounds/scattered-clouds.jpg";
import SnowImage from "./assets/backgrounds/snow.jpg";
import ThunderImage from "./assets/backgrounds/thunderstorm.jpg";
import FogImage from "./assets/backgrounds/winter.jpg";

const getBackgroundImage = (climate) => {
    switch (climate) {
        case "Rain":
            return RainImage;
        case "Clouds":
            return CloudsImage;
        case "Clear":
            return ClearSkyImage;
        case "Snow":
            return SnowImage;
        case "Thunder":
            return ThunderImage;
        case "Fog":
            return FogImage;
        case "Mist":
            return MistImage;
        case "Haze":
            return HazeImage;

        default:
            return ClearSkyImage;
    }
};

function Page() {
    const { weatherData, loading } = useContext(WeatherContext);
    const [climateImage, setClimateImage] = useState("");
    useEffect(() => {
        const bgImage = getBackgroundImage(weatherData.climate);
        setClimateImage(bgImage);
    }, [weatherData.climate]);
    return (
        <div
            style={{ backgroundImage: `url('${climateImage}')` }}
            className="grid place-items-center h-screen bg-no-repeat bg-cover"
        >
            <Header />
            {!loading.state ? (
                <main>
                    <section>
                        <WeatherBoard />
                    </section>
                </main>
            ) : (
                <p>{loading.message}</p>
            )}
        </div>
    );
}

export default Page;
