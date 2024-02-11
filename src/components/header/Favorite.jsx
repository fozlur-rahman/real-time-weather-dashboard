import heart from "../../assets/heart.svg";
function Favorite({ onShow }) {
    return (
        <div className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]">
            <img src={heart} alt="" />
            <span className="cursor-pointer" onClick={() => onShow((show) => !show)}>
                Favourite Locations
            </span>
        </div>
    );
}

export default Favorite;
