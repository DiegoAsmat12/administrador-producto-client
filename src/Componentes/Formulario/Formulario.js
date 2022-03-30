import React, { useState } from 'react';
const Formulario = (props) =>{

    const {productoInicial, submitAction} = props;
    const [producto,setProducto] = useState(productoInicial);
    const modificarProducto = (e) =>{
        setProducto(prev => {
            return {...prev,[e.target.name]:e.target.value}
        });
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        submitAction(producto);
    }

    return(
        <form onSubmit={onSubmit}>
            <label htmlFor='titulo'>Título: </label>
            <input type="text" value={producto.titulo} onChange={(e) => modificarProducto(e)} name="titulo" id="titulo" />
            <label htmlFor='precio'>Precio: </label>
            <input type="text" value={producto.precio} onChange={(e) => modificarProducto(e)} name="precio" id="precio" />
            <label htmlFor='descripcion'>Descripción: </label>
            <textarea value={producto.descripcion} onChange={(e) => modificarProducto(e)} name="descripcion" id="descripcion"></textarea>
            <button type='submit'>Crear</button>
        </form>
    )
}
export default Formulario;