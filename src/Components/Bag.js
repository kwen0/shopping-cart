import Header from './Header';
import Footer from './Footer';

function Bag(props) {
    const { bag, addToBag } = props;
    console.log(bag)
    return (
        <div>
            <Header bag={bag} />
            <div className="bag summary">
                {bag.map(item => (
                    <div className="bag row" key={item.id}>
                        <img src={item.image} alt="jewelry" className="bag img" />
                        <div>
                            <div className="prod name">{item.name}</div>
                            <div className="prod material">{item.material}</div>
                            <div class="edit-qty">
                                <button>-</button>
                                <div>{item.qty}</div>
                                <button>+</button>
                            </div>
                            <div className="prod price">${item.price}</div>

                        </div>
                    </div>
                ))}
            </div >
            <Footer />
        </div>
    );
}

export default Bag;
