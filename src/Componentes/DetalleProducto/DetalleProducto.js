import React from "react";

const DetalleProducto = (props) =>{
    const productoSeleccionado = props.listaProductos.find( (producto, indice) => producto._id === props.match.params.id);

    return(
        (productoSeleccionado) ? 
        (<div>
            <h1>{productoSeleccionado.titulo}</h1>
            <p>Precio: {productoSeleccionado.precio}</p>
            <p>Descripción: {productoSeleccionado.descripcion}</p>
        </div>):<div>Producto no encontrado</div>
    )
}

export default DetalleProducto;