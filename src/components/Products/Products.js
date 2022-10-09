import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css'

const products = (props) => {
    const {addToCart} = props;
    const { name, price, ratings} = props.products;
    return (
        <div className='product'>
            <img src='image/shoe.jpg' alt="shoe"></img>
            <div className="info-area">
                <h3>{name}</h3>
                <p>Price: {price}</p>
                <p>Ratings: {ratings}</p>
            </div>
            <button onClick={()=>addToCart(props.products)} className='cartBtn'>Add to Cart  <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default products;