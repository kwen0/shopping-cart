import Header from './Header';
import Footer from './Footer';
import Product from './Product';
import { data } from './data.js';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Products(props) {
    const { category } = props;
    const [bag, setBag] = useState([]);
    function addToBag(product) {
        const existingItem = bag.find(item => item.id === product.id)
        if (existingItem) {
            setBag(bag.map((item) => item.id === product.id ? { ...existingItem, qty: existingItem.qty + 1 } : item))
        } else {
            setBag([...bag, { ...product, qty: 1 }])
        }
        console.log(bag)
    }

    return (
        <div>
            <Header />
            <div className="navbar">
                <Link to='/all'><li className={category === "all" ? 'active' : null}>ALL</li></Link>
                <Link to='/bracelets'><li className={category === "bracelets" ? 'active' : null}>BRACELETS</li></Link>
                <Link to='/earrings'><li className={category === "earrings" ? 'active' : null}>EARRINGS</li></Link>
                <Link to='/necklaces'><li className={category === "necklaces" ? 'active' : null}>NECKLACES</li></Link>
            </div>
            {category === 'bracelets' ?
                <div className="prod container">
                    <Product category={data.bracelets} addToBag={addToBag} />
                </div> :
                category === 'earrings' ?
                    <div className="prod container">
                        <Product category={data.earrings} addToBag={addToBag} />
                    </div> :
                    category === 'necklaces' ?
                        <div className="prod container">
                            <Product category={data.necklaces} addToBag={addToBag} />
                        </div> :
                        category === 'all' ? <div className="prod container">
                            <Product category={data.earrings} addToBag={addToBag} />
                            <Product category={data.bracelets} addToBag={addToBag} />
                            <Product category={data.necklaces} addToBag={addToBag} />
                        </div> : null}
            <Footer />
        </div >
    );
}

export default Products;
