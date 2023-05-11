import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const ItemDetail = ({id, nombre, precio, img, stock}) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const contadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos agregados:" + cantidad);
  }


  return (
    <div className='contendorItem'>
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit minima error iusto numquam laudantium. Deleniti exercitationem dolorem laborum perspiciatis obcaecati corrupti distinctio, tempore saepe, minus unde dolorum adipisci maxime eligendi!</p>
        <img src= {img} alt= {nombre}/>
        
        {
          agregarCantidad > 0 ? (<link to="/cart"> Terminar compra </link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={contadorCantidad}/>)
        }
    </div>
  )
}

export default ItemDetail