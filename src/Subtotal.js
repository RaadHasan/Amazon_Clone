import React,{useContext} from 'react';
import './subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { StateContext } from './StateProvider';
import {useHistory} from 'react-router-dom';

function Subtotal() {
 const history = useHistory();
 const [{basket}] = useContext(StateContext);
// console.log(basket);

const totalPrice = ()=>{
    let sum = 0;
    basket.map((item) => {
         sum = sum + item.price;
    })
    return sum;
}
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            {/* Part of the homework */}
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={totalPrice()}// Part of the homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={()=>history.push('/payment')}>Procees to Checkout</button>
        </div>
    )
}
export default Subtotal;
