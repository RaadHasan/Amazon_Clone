import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import './product.css';
import { StateContext} from './StateProvider';
import Details from './Details';

function Product({data,rating}) {
    const [{basket},dispatch] = useContext(StateContext);
    const addToBasket = (product) => {
        //dispatch 
        dispatch({
            type: 'ADD_TO_BASKET',
            item:product,
        });
    }

    
    return (
        <div className="product">
            {data.map((product) => {
                return (
                    <div key={product.id} className="product">
                        <div className="product__info">
                            <p>{product.title}</p>
                            <p className="product__price">
                                <small>$</small>
                                <strong>{product.price}</strong>
                            </p>
                            <div className="product__rating">
                                {Array(rating)
                                    .fill()
                                    .map((_, i) => (
                                        <p>🌟</p>
                                    ))}
                            </div>
                            <Link to={`/more_details/${product.id}`} style={{textDecoration:'none',color:'black'}}>
                                learn more 
                            </Link>
                        </div>
                        <img src={product.image} alt="" />
                        <button onClick={() => addToBasket(product)}>Add to Basket</button>
                    </div>
                );
            })}
        </div>
    )
}

export default Product;
