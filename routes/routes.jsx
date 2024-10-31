import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../templates/Home";
import Coin from "../templates/Coin";

function Paths() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/coins/:id" element={<Coin />} />
            </Routes>
        </Router>
    )
}

export default Paths