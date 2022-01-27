import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Comingsoon from "./Components/Comingsoon";
import Products from "./Components/Products";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/bracelets" element={<Products category="bracelets" />} />
                <Route path="/earrings" element={<Products category="earrings" />} />
                <Route path="/necklaces" element={<Products category="necklaces" />} />
                <Route path="/comingsoon" element={<Comingsoon />} />
                <Route path="/all" element={<Products category="all" />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;