import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Bracelets from "./Components/Bracelets";
import Earrings from "./Components/Earrings";
import Bestsellers from "./Components/Bestsellers";
import Comingsoon from "./Components/Comingsoon"

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/bracelets" element={<Bracelets />} />
                <Route path="/earrings" element={<Earrings />} />
                <Route path="/bestsellers" element={<Bestsellers />} />
                <Route path="/comingsoon" element={<Comingsoon />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;