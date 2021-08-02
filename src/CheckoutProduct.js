import React,{useContext} from 'react';
import './checkoutProduct.css';
import { StateContext } from './StateProvider';

function CheckoutProduct({product,rating}) {
    const [{basket},dispatch] = useContext(StateContext);

    const removeFromBasket = (product) =>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:product.id,
        })

    }
    return (
        <div className="checkout_product">
             <img className="checkoutProduct_image" src={product.image} alt="" />

             <div className="checkoutProduct__info">
                            <p className="checkoutProduct__title">{product.title}</p>
                            <p className="checkoutProduct__price">
                                <small>$</small>
                                <strong>{product.price}</strong>
                            </p>
                            {/* <div className="checkoutProduct__rating">
                                {Array(rating)
                                    .fill()
                                    .map((_, i) => (
                                        <p>🌟</p>
                                    ))}
                            </div> */}
                             <button onClick={()=> removeFromBasket(product)}>Reomove from Basket</button>
                        </div>
                       
        </div>
    )
}

export default CheckoutProduct;
