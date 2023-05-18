import React from "react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CarritoContext } from "../../Context/CarritoContext" 


const CartWidget = () => {
    const {carrito} = useContext(CarritoContext);
    return(
        <div>
            5🛒
            {/* <img src='/public/vite.svg' alt= 'carrito'/>*/}

            <link to='/cart'></link>
        </div>
    )
}

export default CartWidget