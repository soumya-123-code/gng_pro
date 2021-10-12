import React, {createContext, useReducer} from "react"
import {ProductReducer} from "./productReducer"
import iphone from "../assets/iphone.jpg";
import headphones from "../assets/headphones.jpg"
import microphone from "../assets/microphone.jpg"
import rings from "../assets/rings.jpg"
import shoes from "../assets/shoes.jpg"
import watch from "../assets/watch.jpg"
import perfum from "../assets/perfume.jpg"
import dslr from "../assets/dslr.jpg"


export const productContext = createContext();


const ProductContextProvider = (props) => {

    const [products] = useReducer(ProductReducer, [
        {id: 1, name: 'Veg Strips Rice',price :200, image: "https://res.cloudinary.com/grabbngo/image/upload/b_transparent,c_scale,dpr_2.0,f_auto,q_auto:good,r_max,w_100/v1543481485/AIRPORTIMAGES/subway/Chicken_Tikka.jpg",productStatus: 'new'},
        {id: 3, name: 'ButterScotch Cake', price: 300, image: "https://res.cloudinary.com/grabbngo/image/upload/b_transparent,c_scale,dpr_2.0,f_auto,q_auto:good,r_max,w_100/v1563869164/BANGALORE%20AIRPORT/puro%20gusto/MARBLE_CAKE.jpg",productStatus: 'new'},
        {id: 4, name: 'Chicken Burger', price: 150, image: "https://res.cloudinary.com/grabbngo/image/upload/b_transparent,c_scale,dpr_2.0,f_auto,q_auto:good,r_max,w_100/v1569576357/DELHI/FLYING%20BTES/Chicken_Burger_Combo.png",productStatus: 'new'},
        {id: 5, name: 'Chicken Fried Rice', price: 160, image: "https://res.cloudinary.com/grabbngo/image/upload/b_transparent,c_scale,dpr_2.0,f_auto,q_auto:good,r_max,w_100/v1582194139/BANGALORE%20AIRPORT/noodle%20international/schezwan_chicken_fried_rice.png",productStatus: 'hot'},
        {id: 6, name: 'Chilli Chicken', price: 500, image: "https://res.cloudinary.com/grabbngo/image/upload/b_transparent,c_scale,dpr_2.0,f_auto,q_auto:good,r_max,w_100/v1583325181/BANGALORE%20LOCAL%20STORES/chilli_chicken.png",productStatus: 'new'},
        {id: 7, name: 'Chicken Hakka Noodles', price: 240, image: "https://res.cloudinary.com/grabbngo/image/upload/b_transparent,c_scale,dpr_2.0,f_auto,q_auto:good,r_max,w_100/v1583320283/removed_bg/delhi_intl_tfs/arpztdagyz8pmde57eyj.png",productStatus: 'hot'},
        {id: 8, name: 'Gobi Chilli', price: 120, image: "https://res.cloudinary.com/grabbngo/image/upload/b_transparent,c_scale,dpr_2.0,f_auto,q_auto:good,r_max,w_180/v1583385624/BANGALORE%20LOCAL%20STORES/gobi_manchuria.png",productStatus: 'new'},
      ])
      

      const [recommendation_product] = useReducer(ProductReducer, [
        {id: 1, name: 'Chicken Fried Rice', price: 160, image: "https://res.cloudinary.com/grabbngo/image/upload/b_transparent,c_scale,dpr_2.0,f_auto,q_auto:good,r_max,w_100/v1582194139/BANGALORE%20AIRPORT/noodle%20international/schezwan_chicken_fried_rice.png",productStatus: 'hot'},
        {id: 2, name: 'Chilli Chicken', price: 500, image: "https://res.cloudinary.com/grabbngo/image/upload/b_transparent,c_scale,dpr_2.0,f_auto,q_auto:good,r_max,w_100/v1583325181/BANGALORE%20LOCAL%20STORES/chilli_chicken.png",productStatus: 'new'},
        {id: 3, name: 'Chicken Hakka Noodles', price: 240, image: "https://res.cloudinary.com/grabbngo/image/upload/b_transparent,c_scale,dpr_2.0,f_auto,q_auto:good,r_max,w_100/v1583320283/removed_bg/delhi_intl_tfs/arpztdagyz8pmde57eyj.png",productStatus: 'hot'},
        {id: 4, name: 'Gobi Chilli', price: 120, image: "https://res.cloudinary.com/grabbngo/image/upload/b_transparent,c_scale,dpr_2.0,f_auto,q_auto:good,r_max,w_180/v1583385624/BANGALORE%20LOCAL%20STORES/gobi_manchuria.png",productStatus: 'new'},
      ])
      
      
    return(
        <productContext.Provider value={{products,recommendation_product}}>
           {props.children}
        </productContext.Provider>
    )

}

export default ProductContextProvider;