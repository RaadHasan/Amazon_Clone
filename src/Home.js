import React from 'react';
import Product from './Product';
import useFetch from "./useFetch";
import './home.css';

function Home() {
    const url = 'https://fakestoreapi.com/products/';
    const { data } = useFetch(url);
    // console.log(data);
    return (
        <div className="home" >
            <div className="home__container">
                <img className="home_image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="" />
            </div>
            <div className="home__row">
                <Product data={data.filter((product) => product.id == 11)} rating={4}></Product>
                <Product data={data.filter((product) => product.id == 9)} rating={3}></Product>
            </div>
            <div className="home__row">
                <Product data={data.filter((product) => product.id == 3)} rating={5}></Product>
                <Product data={data.filter((product) => product.id == 2)} rating={3} ></Product>
                <Product data={data.filter((product) => product.id == 17)} rating={2}></Product>
                <Product data={data.filter((product) => product.id == 20)} rating={4}></Product>
            </div>
            <div className="home__row">
                <Product data={data.filter((product) => product.id == 7)} rating={5}></Product>
                <Product data={data.filter((product) => product.id == 8)} rating={1}></Product>
            </div>
        </div>
    )
};

export default Home
