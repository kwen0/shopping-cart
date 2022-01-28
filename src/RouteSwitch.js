import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Comingsoon from "./Components/Comingsoon";
import Products from "./Components/Products";
import Bag from "./Components/Bag";
import { useState } from 'react';

const RouteSwitch = () => {
    const [bag, setBag] = useState([]);
    function addToBag(product) {
        const alreadyInBag = bag.find(item => item.id === product.id)
        alreadyInBag ? setBag(bag.map(item => item.id === product.id ? { ...alreadyInBag, qty: alreadyInBag.qty + 1 } : item))
            : setBag([...bag, { ...product, qty: 1 }])
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home bag={bag} />} />
                <Route path="/bracelets" element={<Products category="bracelets" addToBag={addToBag} bag={bag} />} />
                <Route path="/earrings" element={<Products category="earrings" addToBag={addToBag} bag={bag} />} />
                <Route path="/necklaces" element={<Products category="necklaces" addToBag={addToBag} bag={bag} />} />
                <Route path="/comingsoon" element={<Comingsoon bag={bag} />} />
                <Route path="/all" element={<Products category="all" addToBag={addToBag} bag={bag} />} />
                <Route path="/bag" element={<Bag addToBag={addToBag} bag={bag} />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;