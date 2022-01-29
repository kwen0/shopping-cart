import Header from './Header';
import Footer from './Footer';
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import BagItem from './BagItem';

function Bag(props) {
    const { bag, bagCount, addToBag, removeFromBag, removeEntireItem } = props;
    const total = bag.reduce((sum, item) => sum + item.qty * item.price, 0);

    return (
        <div>
            <Header bag={bag} bagCount={bagCount} />
            <div className="bag summary">
                <div>{bag.length !== 0 ? bag.map(item => (
                    <BagItem item={item} removeEntireItem={removeEntireItem} addToBag={addToBag} removeFromBag={removeFromBag} />
                )) : <div>Your bag is empty!</div>}</div>
                <div>
                    {bag.length !== 0 ? <div className="checkout summary">
                        <div className="checkout row">
                            <div>Subtotal:</div>
                            <div>${total} USD</div>
                        </div>
                        <div className="checkout row">
                            <div>Shipping:</div>
                            <div>Free</div>
                        </div>
                        <div className="checkout row total">
                            <div>Estimated Total:</div>
                            <div>${total} USD</div>
                        </div>
                        <div className="checkout row">
                            <button className="checkout btn" onClick={() => alert('Thank you for shopping with us!')}>CONTINUE TO CHECKOUT</button>
                        </div>
                    </div> : <Link to='/all'><button className="shop btn">SHOP NOW</button></Link>}
                </div>
            </div >
            <Footer />
        </div >
    );
}

export default Bag;
