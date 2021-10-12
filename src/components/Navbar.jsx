import React, {useContext} from "react"
import {cartContext} from "../Global/cartContext"
import {Link} from "react-router-dom"
import logo from "../assets/gnglogo.svg"

const Navbar = ({cartToggle}) => {
   const {shoppingCart} = useContext(cartContext);
    return(
        <nav style={{display:'flex',justifyContent: 'space-between'}}>
 <div className="left">
 <Link to="/"><img src={logo} /></Link>

 </div>
 <div className="right">
   <Link onClick={cartToggle} to="/cart"><span className="dollor"><i className="fas fa-cart-plus"></i></span><span className="shoppingCartTotal">{shoppingCart ? shoppingCart.length : 0}</span></Link>
 </div>
</nav>
    )

}

export default Navbar;

