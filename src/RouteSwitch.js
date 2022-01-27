import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Comingsoon from "./Components/Comingsoon";
import Products from "./Components/Products";
import Bag from "./Components/Bag"

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
                <Route path="/bag" element={<Bag />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;