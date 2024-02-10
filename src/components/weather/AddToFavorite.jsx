import { useContext, useEffect, useState } from "react";
import RedHeartIcon from "../../assets/heart-red.svg";
import HeartIcon from "../../assets/heart.svg";
import { FavoriteContext, WeatherContext } from "../../contex";

function AddToFavorite() {
    const { weatherData } = useContext(WeatherContext);
    const { latitude, longitude, location } = weatherData;
    const { favorites, addToFavorites, removeToFavorite } =
        useContext(FavoriteContext);
    const [isFavorite, setFavorite] = useState(false);

    useEffect(() => {
        const found = favorites.find((fav) => fav.location === location);
        setFavorite(found);
    }, [favorites, location]);
    const handleToggleFavorite = () => {
        setFavorite(!isFavorite);

        const found = favorites.find((fav) => fav.location === location);
        if (!found) {
            addToFavorites(latitude, longitude, location);
        } else {
            removeToFavorite(location);
        }
    };
    return (
        <div className="md:col-span-2">
            <div className="flex items-center justify-end space-x-6">
                <button
                    onClick={handleToggleFavorite}
                    className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
                >
                    {isFavorite ? (
                        <>
                            <span>Add to Favourite</span>
                            <img src={RedHeartIcon} alt="" />
                        </>
                    ) : (
                        <>
                            <span>Add to Favourite</span>
                            <img src={HeartIcon} alt="" />
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}

export default AddToFavorite;
