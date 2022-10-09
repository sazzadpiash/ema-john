import React from 'react';

const Cart = (props) => {
    return (
        <div className='cart'>
            <h1>Cart Items: {props.cart.length}</h1>
        </div>
    );
};

export default Cart;