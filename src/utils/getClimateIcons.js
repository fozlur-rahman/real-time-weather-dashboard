// icons
import {
    default as FogIcon,
    default as HazeIcon,
    default as MistIcon,
} from "../assets/haze.svg";
import CloudsIcon from "../assets/icons/cloud.svg";
import SnowIcon from "../assets/icons/snow.svg";
import RainIcon from "../assets/rainy.svg";
import { default as ClearIcon, default as SunnyIcon } from "../assets/sun.svg";
import ThunderIcon from "../assets/thunder.svg";

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

export default getWeatherIcon;
