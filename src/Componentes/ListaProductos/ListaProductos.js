import React from "react";
import {Link} from "react-router-dom";
const ListaProductos = (props) =>{
    const {listaProductos} = props;
    return(
        <div>
            {
                listaProductos.map((producto,index) =>{
                    return (
                    <div>
                        <Link key={"producto_"+index} to={"/"+producto._id}>{producto.titulo}</Link>
                    </div>)
                })
            }
        </div>
    )
}

export default ListaProductos;