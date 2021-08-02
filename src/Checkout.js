import React,{useContext} from 'react';
import './checkout.css';
import CheckoutProduct from './CheckoutProduct.js';
import Subtotal from './Subtotal';
import {StateContext} from './StateProvider.js'

function Checkout() {
    const [{basket}] = useContext(StateContext);
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg" />
                <div>
                    <h2 className="checkout__title">
                        Your shopping basket
                    </h2>
                     <div className="checkout_items">
                        {basket.map((product)=>{
                        return(
                            <CheckoutProduct product={product}></CheckoutProduct>
                         );
                        })}
                </div>
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal></Subtotal>
            </div>
        </div>  
        
    );
}

export default Checkout
