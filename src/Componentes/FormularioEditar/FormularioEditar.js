import axios from "axios";
import React, { useEffect, useState } from "react";
import Formulario from "../Formulario/Formulario";

const FormularioEditar = (props) =>{
    const {productoInicial}= props;
    const [producto,setProducto] = useState(productoInicial);
    const [listo,setListo] = useState(false);
    const {id} = props.match.params;

    useEffect(() =>{
        axios.get('http://localhost:8080/api/productos/'+id)
            .then(response => {
                setProducto( response.data );
                setListo(true)
            })
    },[])

    const updateProduct = (producto) =>{
        axios.put("http://localhost:8080/api/productos/"+id,producto)
            .then(response => {
                console.log(response);
            })
    }

    return (
        listo ? <Formulario productoInicial={producto} submitAction={updateProduct}/> : ""
    )
}

export default FormularioEditar;