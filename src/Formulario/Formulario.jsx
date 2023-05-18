import React from 'react'
import { useState } from 'react'
import { db } from '../Servise/Firebase/Config'
import { collection, addDoc } from 'firebase/firestore'
import './Formulario.css' 


const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");


  return (
    <form>
        <label htmlFor=''>Nombre</label>
        <input type='text' value={nombre} onChange={(event) => setNombre (event.target.value)}/>

        <label htmlFor=''>Apellido</label>
        <input type='text' value={apellido} onChange={(event) => setApellido (event.target.value) }/>

        <label htmlFor=''> Telefono </label>
        <input type='text' value={telefono} onChange={(event) => setTelefono (event.target.value)}/>
    </form>
  )
}

export default Formulario