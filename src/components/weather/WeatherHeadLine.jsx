import { useContext } from "react";
import pin from "../../assets//pin.svg";
import { WeatherContext } from "../../contex";
import { getFormattedDateTime } from "../../utils/date_utils";

// icons
import CloudsIcon from "../../assets/cloud.svg";
import {
    default as FogIcon,
    default as HazeIcon,
    default as MistIcon,
} from "../../assets/haze.svg";
import SnowIcon from "../../assets/icons/snow.svg";
import RainIcon from "../../assets/rainy.svg";
import { default as ClearIcon, default as SunnyIcon } from "../../assets/sun.svg";
import ThunderIcon from "../../assets/thunder.svg";
function WeatherHeadLine() {
    const { weatherData } = useContext(WeatherContext);
    const { temperature, climate, time, location } = weatherData;

    // dynaic icon for weather
    const getWeatherIcon = (climate) => {
        switch (climate) {
            case "Rain":
                return RainIcon;
            case "Clouds":
                return CloudsIcon;
            case "Clear":
                return ClearIcon;
            case "Snow":
                return SnowIcon;
            case "Thunder":
                return ThunderIcon;
            case "Fog":
                return FogIcon;
            case "Mist":
                return MistIcon;
            case "Haze":
                return HazeIcon;

            default:
                return SunnyIcon;
        }
    };
    return (
        <div>
            <div className="max-md:flex items-center justify-between md:-mt-10">
                <div className="flex">
                    <img src={getWeatherIcon(climate)} alt="climate" />
                    <h2 className="text-2xl ms-3 text-yellow-700">{climate}</h2>
                </div>
                <div className="max-md:flex items-center max-md:space-x-4">
                    <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
                        {Math.round(temperature)}°c
                    </h1>
                    <div className="flex items-center space-x-4 md:mb-4">
                        <img src={pin} />
                        <h2 className="text-2xl lg:text-[50px]">
                            {location === "Purbapāra" ? "Pabna" : location}
                        </h2>
                    </div>
                </div>
            </div>
            <p className="text-sm lg:text-lg">
                {getFormattedDateTime("time", time, false)} -{" "}
                {getFormattedDateTime("date", time, false)}
            </p>
        </div>
    );
}

export default WeatherHeadLine;
