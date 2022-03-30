import React from "react";
import BotonEliminar from "../BotonEliminar/BotonEliminar";

const DetalleProducto = (props) =>{
    const productoSeleccionado = props.listaProductos.find( (producto, indice) => producto._id === props.match.params.id);

    return(
        (productoSeleccionado) ? 
        (<div>
            <h1>{productoSeleccionado.titulo}</h1>
            <p>Precio: {productoSeleccionado.precio}</p>
            <p>Descripción: {productoSeleccionado.descripcion}</p>
            <BotonEliminar id={productoSeleccionado._id} successCallback={() => props.history.push("/")} />
        </div>):<div>Producto no encontrado</div>
    )
}

export default DetalleProducto;