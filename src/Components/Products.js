import Header from './Header';
import Footer from './Footer';
import Product from './Product'
import { data } from './data.js'

function Products(props) {
    const { category } = props;
    return (
        <div>
            <Header />
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
                            <Product category={data.bracelets} />
                            <Product category={data.earrings} />
                            <Product category={data.necklaces} />
                        </div> : null}
            <Footer />
        </div >
    );
}

export default Products;
