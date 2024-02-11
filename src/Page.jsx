import { useContext, useEffect, useState } from "react";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { WeatherContext } from "./contex";
import getBackgroundImage from "./utils/getDynamicBackground";

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
