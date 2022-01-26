import Header from './Header';
import Footer from './Footer';
import Product from './Product'
import { data } from './data.js'

function Products() {
    return (
        <div>
            <Header />
            <div className="prod container">
                <Product category={data.earrings} />
                <Product category={data.bracelets} />
                <Product category={data.necklaces} />
            </div>
            <Footer />
        </div>
    );
}

export default Products;
