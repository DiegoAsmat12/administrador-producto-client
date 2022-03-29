import React from 'react';
const Formulario = (props) =>{
    return(
        <form onSubmit={(event) => props.crearProducto(event)}>
            <label htmlFor='titulo'>Título: </label>
            <input type="text" value={props.nuevoProducto.titulo} onChange={(e) => props.modificarNuevoProducto(e)} name="titulo" id="titulo" />
            <label htmlFor='precio'>Precio: </label>
            <input type="text" value={props.nuevoProducto.precio} onChange={(e) => props.modificarNuevoProducto(e)} name="precio" id="precio" />
            <label htmlFor='descripcion'>Descripción: </label>
            <textarea value={props.nuevoProducto.descripcion} onChange={(e) => props.modificarNuevoProducto(e)} name="descripcion" id="descripcion"></textarea>
            <button type='submit'>Crear</button>
        </form>
    )
}
export default Formulario;