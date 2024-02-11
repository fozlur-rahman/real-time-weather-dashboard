import { useContext } from "react";
import pinIcon from "../../assets//pin.svg";
import { WeatherContext } from "../../contex";
import { getFormattedDateTime } from "../../utils/date_utils";
import getWeatherIcon from "../../utils/getClimateIcons";

function WeatherHeadLine() {
    const { weatherData } = useContext(WeatherContext);
    const { temperature, climate, time, location } = weatherData;
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
                        <img src={pinIcon} />
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
