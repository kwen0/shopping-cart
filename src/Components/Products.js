import Header from './Header';
import Footer from './Footer';
import Product from './Product'
import { data } from './data.js'
import { Link } from 'react-router-dom'

function Products(props) {
    const { category } = props;
    return (
        <div>
            <Header />
            <div class="navbar">
                <Link to='/all'><li className={category === "all" ? 'active' : null}>ALL</li></Link>
                <Link to='/bracelets'><li className={category === "bracelets" ? 'active' : null}>BRACELETS</li></Link>
                <Link to='/earrings'><li className={category === "earrings" ? 'active' : null}>EARRINGS</li></Link>
                <Link to='/necklaces'><li className={category === "necklaces" ? 'active' : null}>NECKLACES</li></Link>
            </div>
            {category === 'bracelets' ?
                <div className="prod container">
                    <Product category={data.bracelets} />
                </div> :
                category === 'earrings' ?
                    <div className="prod container">
                        <Product category={data.earrings} />
                    </div> :
                    category === 'necklaces' ?
                        <div className="prod container">
                            <Product category={data.necklaces} />
                        </div> :
                        category === 'all' ? <div className="prod container">
                            <Product category={data.earrings} />
                            <Product category={data.bracelets} />
                            <Product category={data.necklaces} />
                        </div> : null}
            <Footer />
        </div >
    );
}

export default Products;
