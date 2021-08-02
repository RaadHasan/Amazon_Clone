import React,{useContext} from 'react';
import { StateContext } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import {Link} from 'react-router-dom';
import './payment.css';

function Payment() {
    const [{basket}] = useContext(StateContext);
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout(<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                
                <div className="payment__section">
                    <div className="payment__title">
                        Delivery Address
                    </div>

                    <div className="payment__address">
                        <p>raadibrahem@gmail.com</p>
                        <p>30's street</p>
                        <p>Irbid,Jordan</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>

                    <div className="payment__item">
                        {basket.map((product)=>{
                            return <CheckoutProduct product={product}/>
                        })}
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment method</h3>
                    </div>

                    <div className="payment__details"></div>
                </div>
            </div>
        </div>
    )
}

export default Payment;
