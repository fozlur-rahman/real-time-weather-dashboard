import { FavoriteContext } from "../contex";
import useLocalStorage from "../hooks/useLocalStorage";

function FavoriteProvider({ children }) {
    const [favorites, setFavorites] = useLocalStorage("favorites", []);

    const addToFavorites = (latitude, longitude, location) => {
        setFavorites([
            ...favorites,
            {
                latitude: latitude,
                longitude: longitude,
                location: location,
            },
        ]);
    };

    const removeToFavorite = (location) => {
        const restFavorite = favorites.filter((fav) => fav.location !== location);
        setFavorites(restFavorite);
    };
    return (
        <FavoriteContext.Provider
            value={{ favorites, addToFavorites, removeToFavorite }}
        >
            {children}
        </FavoriteContext.Provider>
    );
}

export default FavoriteProvider;
