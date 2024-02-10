import { useContext } from "react";
import pin from "../../assets//pin.svg";
import { WeatherContext } from "../../contex";
import { getFormattedDateTime } from "../../utils/date_utils";

function WeatherHeadLine() {
    const { weatherData } = useContext(WeatherContext);
    const { temperature, climate, location, time } = weatherData;
    return (
        <div>
            <div className="max-md:flex items-center justify-between md:-mt-10">
                <img src="./assets/cloud.svg" alt="cloud" />
                <div className="max-md:flex items-center max-md:space-x-4">
                    <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
                        {Math.round(temperature)}
                        °c
                    </h1>
                    <div className="flex items-center space-x-4 md:mb-4">
                        <img src={pin} />
                        <h2 className="text-2xl lg:text-[50px]">Dhaka</h2>
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
