import React,{useContext} from 'react';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { StateContext} from './StateProvider';

function Header() {
    const [{basket}] = useContext(StateContext);

    return (
        <div className="header">
            <Link to='/'>
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    className="header_logo" alt="" />
            </Link>

            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon" />
            </div>

            <div className="header_nav">
               
                <div className="header_option">
                    <span className="header_option_lineOne">
                        Hello Guest
                    </span>
                     <Link to="/login" style={{textDecoration:'none',color:'White'}}>
                    <span className="header_option_lineTwo">
                        Sign In
                    </span>
                      </Link>
                </div>
                <div className="header_option">
                    <span className="header_option_lineOne">
                        Returns
                    </span>
                    <span className="header_option_lineTwo">
                        & Orders
                    </span>
                </div>
                <div className="header_option">
                    <span className="header_option_lineOne">
                        Your
                    </span>
                    <span className="header_option_lineTwo">
                        Prime
                    </span>
                </div>
                <Link to="/checkout" style={{textDecoration:'none'}}>
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_optionlineTwo header_basketCount">{basket?.length}</span>
                    </div></Link>

            </div>
        </div>
    )
}

export default Header
