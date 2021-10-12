import React, {useContext} from "react"
import { productContext } from "../Global/productContext"
import {cartContext} from "../Global/cartContext"
import { Link } from 'react-router-dom';

import Banner from "./Banner"
const Products = () => {
   const {products} = useContext(productContext);
   const {dispatch} = useContext(cartContext);

   console.log(products)
    return(
        <>
        <Banner />
        <div className="products" style={{marginTop: '30px',}}>
        {products.map(product => (
            <div className="product" key={product.id} style={{height: '360px',
            width:' 240px'}}>
              <div className="pro">
            <div className="productImage">
              <img src={product.image} alt="Not found" style={{top: '10%',
    height: '160px',
    width:' 160px',
    objectFit: 'contain',
    filter: 'drop-shadow(rgba(34, 34, 34, 0.8) 15px 15px 15px)'}}/>
            </div>
            <div className="productDetails">
                <div className="proName">
                 <h6>{product.name}</h6>
                </div>
               <div className="proPrice">
                  <h6> &#8377; {product.price}.00</h6>
               </div>
               
            </div>
            <Link to="/cart">   <div className="proButton" onClick={() => dispatch({type: 'ADD_TO_CART', id: product.id, products})}>
                 <button className="buyNow" >add to cart</button>
               </div></Link>
               {product.productStatus === 'new' ? <div className="new">New</div>: ''}
               {product.productStatus === 'hot' ? <div className="hot">Hot</div>: ''}
            </div>
            </div>
        ))}
        
        </div>
      
        </>
    )

}

export default Products;