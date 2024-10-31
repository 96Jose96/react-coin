import { Routes, Route } from "react-router-dom";
import Home from "../templates/home/Home";
import Coin from "../templates/coin/Coin";
import Favorites from "../templates/favorites/Favorites";

function Paths() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coins/:id" element={<Coin />} />
            <Route path="/favorites" element={<Favorites />} />
        </Routes>
    )
}

export default Paths