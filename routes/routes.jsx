import { Routes, Route } from "react-router-dom";
import Home from "../templates/Home";
import Coin from "../templates/Coin";
import Favorites from "../templates/Favorites";

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