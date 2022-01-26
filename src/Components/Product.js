import React from 'react';
import { data } from './data.js'

function Product(props) {
    const { category } = props;
    return (
        <div className="test">
            {category.map((item) => (
                <div className="prod cell">
                    <img src={item.image} alt="jewelry" className="prod img" />
                    <div className="prod title">
                        <div className="prod name">{item.name}</div>
                        <div className="prod price">${item.price}</div>
                    </div>
                    <div className="prod material">{item.material}</div>
                </div>
            ))}
        </div>
    );
}

export default Product;
