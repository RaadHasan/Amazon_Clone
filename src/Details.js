import React,{useContext} from 'react';
import './details.css';
import { StateContext } from './StateProvider';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import useFetch from './useFetch';
import { Rating } from '@material-ui/lab';
import LocationOnIcon from '@material-ui/icons/LocationOn';


function Details() {
    const [{basket},dispatch] = useContext(StateContext);

     const addToBasket = (product) => {
        //dispatch 
        dispatch({
            type: 'ADD_TO_BASKET',
            item:product,
        });
    }

    const url = 'https://fakestoreapi.com/products/';
    const { data } = useFetch(url);
    const {id} = useParams();
    const [product] = data.filter((item)=> item.id === parseInt(id) )
    const cate = data.filter((item)=> {
        return item.category === product.category;
    })
    return (
        <div>
           {data.map((product) =>{
               if (product.id === parseInt(id))
               {
                    return (
                         <div key={product.id} className="product__to__view">
                            <img src={product.image} alt="" />
                            <div className="product__to__view__info">
                                <p className="product__title">{product.title}</p>
                                <p className="product__desc">{product.description}</p>
                                <button className="add__btn" onClick={()=>addToBasket(product)}>Add to basket</button>
                              
                               
                            </div>
                             <div className="product__to__view__details">
                                    <ul>
                                        <li style={{color:'orange'}}>Price: <small>$</small>{product.price}</li>
                                        <li>Size: L </li>
                                        <li>Categorey: {product.category} </li>
                                        <li>Availability:  <span style={{color:'#18ee46'}}> In Stock</span></li>
                                        <li> <h5>Shipping to Jordan  <LocationOnIcon/></h5></li>

                                         <div className="rating">
                                            <h3>Rate Product</h3>
                                            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                         </div>
                                    </ul>   
                            </div> 
                        </div>
                    )
               }
           }) }

           <h1 className="realted__h1">related products</h1>

           <div className="related__container">
                {cate.filter((item)=> item.id !== parseInt(id)
                 ).map((item)=>{
                return (
                    <div key={item.id}>
                        <div className="realted__product">
                            <img className="realted__product__img" src={item.image} alt="" />
                            <p className="related__product__title" >{item.title}</p>
                              <Link className="learn__more" to={`/more_details/${item.id}`}>
                                Learn more 
                             </Link>
                            {/* <p className="realted__product__price">
                                <small>$</small>
                                <strong>{item.price}</strong>
                            </p> */}
                           
                        </div>
                       
                    </div>
                )
            })}
           </div>
        </div>
    )
};

export default Details;
