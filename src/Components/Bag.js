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
                {bag.length !== 0 ? bag.map(item => (
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
                                    <button class="btn" onClick={() => removeFromBag(item)}>-</button>
                                    <div class="qty">{item.qty}</div>
                                    <button class="btn" onClick={() => addToBag(item)}>+</button>
                                </div>
                                <div className="prod price">${item.price * item.qty}</div>
                            </div>
                        </div>
                    </div>
                )) : <div>Your bag is empty!</div>}
                <div className="checkout">
                    <div className="wrapper">
                        <div>Subtotal: {total}</div>
                        <div>Shipping: free</div>
                        <div>{quantity}</div>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    );
}

export default Bag;
