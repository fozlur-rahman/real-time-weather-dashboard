import { useContext } from "react";
import { FavoriteContext, LocationContext } from "../../contex";

function FavoriteListModal() {
    const { favorites } = useContext(FavoriteContext);
    const { setSelectedLocation } = useContext(LocationContext);
    return (
        <div className="max-w-xs py-4 bg-black/20 rounded-md border-gray-500 border-[2px] absolute right-0 top-16 text-black backdrop-blur-md shadow-lg ">
            <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
            <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
                {favorites.length > 0 ? (
                    favorites?.map((fav) => (
                        <li key={fav.location} className="hover:bg-gray-200">
                            <a onClick={() => setSelectedLocation({ ...fav })}>
                                {fav.location === "Purbapāra"
                                    ? "Pabna"
                                    : fav.location}
                            </a>
                        </li>
                    ))
                ) : (
                    <li className="text-red-600">Not Found</li>
                )}
            </ul>
        </div>
    );
}

export default FavoriteListModal;
