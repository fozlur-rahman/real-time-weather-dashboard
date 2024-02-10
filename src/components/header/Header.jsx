import { useState } from "react";
import Logo from "../Logo";
import Favorite from "./Favorite";
import FavoriteListModal from "./FavoriteListModal";
import SearchBox from "./SearchBox";

function Header() {
    const [showFavModal, setShowFavModal] = useState(false);

    // const handleShowFavModal = () => {
    //     setShowFavModal(!showFavModal);
    // };
    return (
        <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
            <nav className="container flex items-center justify-between py-6">
                <Logo />

                <div className="flex items-center gap-4 relative">
                    {/* ============= */}
                    <SearchBox />
                    <Favorite onShow={setShowFavModal} />
                    {showFavModal && <FavoriteListModal />}
                    {/* ============= */}
                </div>
            </nav>
        </header>
    );
}

export default Header;
