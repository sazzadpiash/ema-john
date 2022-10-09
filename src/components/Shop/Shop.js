import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from './../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const addToCart = productDetails => {
        const newCart = [...cart, productDetails];
        setCart(newCart);
    }
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='shop-page'>
            <div className="shop">
            {
                products.map((products)=><Products key={products.id} products={products} addToCart={addToCart}></Products>)
            }
            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>

    );
};

export default Shop;