import React from "react"
import { useEffect, useState } from "react"
import { obtenerProductos, getCategorias } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([]);

    const {idCategoria} = useParams();

     useEffect(() => {

        const funcionProductos = idCategoria ? getCategorias : obtenerProductos;

        funcionProductos(idCategoria)
        .then(res => setProductos(res))
        .catch(error => console.log(error))
     }, [idCategoria])


    return(
        <>
            <h2 style={{ textAlign: "center"}}>{greeting}</h2>
            <ItemList productos = {productos}/>
        </>
    )
}

export default ItemListContainer