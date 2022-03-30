import axios from "axios";
import React, { useEffect } from "react";
import {Link} from "react-router-dom";
import BotonEliminar from "../BotonEliminar/BotonEliminar";
const ListaProductos = (props) =>{
    const {listaProductos,setListaProductos} = props;

    useEffect(() =>{
        axios.get("http://localhost:8080/api/productos")
          .then(response => {
            setListaProductos((prev) => response.data)
          })
          .catch(err => console.log(err));
    },[])

    const removerDelDom = (id) =>{
        console.log(id);
        setListaProductos(listaProductos.filter(producto => producto._id!==id));
    }

    return(
        <div>
            {
                listaProductos.map((producto,index) =>{
                    return (
                    <div key={"producto_"+index} >
                        <Link to={"/"+producto._id}>{producto.titulo}</Link>
                        <BotonEliminar id={producto._id} successCallback={() => removerDelDom(producto._id)}/>
                    </div>)
                })
            }
        </div>
    )
}

export default ListaProductos;