import Header from './Header';
import Footer from './Footer';
import { AiOutlineClose } from 'react-icons/ai'

function Bag(props) {
    const { bag, bagCount, addToBag, removeFromBag, removeEntireItem } = props;
    const total = bag.reduce((sum, item) => sum + item.qty * item.price, 0);
    const quantity = bag.reduce((count, item) => count + item.qty, 0)
    return (
        <div>
            <Header bag={bag} bagCount={bagCount} />
            <div className="bag summary">
                <div>{bag.length !== 0 ? bag.map(item => (
                    <div className="bag row" key={item.id}>
                        <img src={item.image} alt="jewelry" className="bag img" />
                        <div className="bag details">
                            <div>
                                <div className="wrapper">
                                    <div className="prod name">{item.name}</div>
                                    <button class="close" onClick={() => removeEntireItem(item)}><AiOutlineClose /></button>
                                </div>
                                <div className="prod material">{item.material}</div>
                            </div>
                            <div class="edit">
                                <div class="edit-qty">
                                    <button className="btn" onClick={() => removeFromBag(item)}>-</button>
                                    <div className="qty">{item.qty}</div>
                                    <button className="btn" onClick={() => addToBag(item)}>+</button>
                                </div>
                                <div className="prod price">${item.price * item.qty}</div>
                            </div>
                        </div>
                    </div>
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
                            <button className="checkout btn">CONTINUE TO CHECKOUT</button>
                        </div>
                    </div> : null}
                </div>
            </div >
            <Footer />
        </div >
    );
}

export default Bag;
