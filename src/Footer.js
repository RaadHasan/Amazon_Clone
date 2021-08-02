import React from 'react';
import {Link} from 'react-router-dom';
import './footer.css';

function Footer() {
    return (
      <div className="container">

            <div className="footer">
            <div className="footerDiv">
                <div className="footerDivMain">Get To Know Us</div>
               <ul>
                   <li>Careers</li>
                   <li>Blog</li>
                   <li>About Amazon</li>
                   <li>Investor Relations</li>
                   <li>Amazon Devices</li>
               </ul>
            </div>
            <div className="footerDiv">
                   <div className="footerDivMain">Make Money With us</div>
               <ul>
                   <li>Sell products on Amazon</li>
                   <li>Sell on Amazon Business</li>
                   <li>Sell apps on Amazon</li>
                   <li>Become an Affiliate</li>
                   <li>Advertise Your Products</li>
                   <li>Self-Publish with Us</li>
                  
               </ul>

            </div>
             <div className="footerDiv">
                  <div className="footerDivMain">Amazon Payment Products</div>
               <ul>
                   <li>Amazon Business Card</li>
                   <li>Shop with Points</li>
                   <li>Reload Your Balance</li>
                   <li>Amazon Currency Converter</li>
               </ul>
            </div>
            <div className="footerDiv">
                  <div className="footerDivMain">Let Us Help You</div>
               <ul>
                   <li>Amazon and COVID-19</li>
                   <li>Your Account</li>
                   <li>Your Orders</li>
                   <li>Shipping Rates & Policies</li>
               </ul>
            </div>
            
        </div>
        <div className="lowerFooter">
                          <Link to='/'>
                            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    className="footer_logo" alt="" /></Link>
                    
                    <div className="lowerFooter_div">
                        <span>English</span>
                        <span>$ JD - Jordan Dinar</span>
                        <span> <img className="jor" src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Jordan_flag_300.png" alt="jor" /> Jordan</span>
                    </div>
        </div>

      </div>
    )
}

export default Footer
