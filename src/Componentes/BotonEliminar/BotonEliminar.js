const { default: axios } = require("axios");

const BotonEliminar = (props) =>{
    const {id, successCallback} = props;

    const eliminarProducto = () =>{
        axios.delete("http://localhost:8080/api/productos/"+id)
          .then(response =>{
            successCallback();
          });
    }

    return (
        <button onClick={eliminarProducto}>Eliminar</button>
    )
}

export default BotonEliminar;