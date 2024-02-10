import { FavoriteContext } from "../contex";
import useLocalStorage from "../hooks/useLocalStorage";

function FavoriteProvider({ children }) {
    const [favorites, setFavorites] = useLocalStorage("favorites", []);

    const addToFavorites = (latitude, longitude, loaction) => {
        setFavorites(...favorites, {
            latitude: latitude,
            longitude: longitude,
            location: loaction,
        });
    };

    const removeToFavorite = (loaction) => {
        const restFavorite = favorites.filter(
            (fav) => fav.loaction !== loaction
        );
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
