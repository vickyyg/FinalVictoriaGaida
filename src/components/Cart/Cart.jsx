import React from 'react';
import { CarritoContext } from "../../Context/CarritoContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
    const  [carrito, vaciarCarrito] = useContext(CarritoContext);
 
    const totalCarrito = carrito.reduce((total, producto) => total + producto.cantidad, 0);
    
    const total = carrito.reduce((total, producto) => total + (producto.item.precio * producto.cantidad));
    
    if(totalCantidad === 0) {
        return (
            <>
            <h2>No hay productos en el carrito</h2>
            <link to='/'>Productos</link>
            </>
        )
    }

    return (
        <div>
            {carrito.map(producto => <CartItem key={producto.id} {...producto}/>)}
            <h3>Total: ${total}</h3>
            <button onClick={() => vaciarCarrito()}>Vaciar carrito</button>
            <link to='checkout'>Finalizar compra</link>
        </div>
    )
}

export default Cart