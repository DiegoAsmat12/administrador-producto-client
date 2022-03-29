import './App.css';
import Formulario from './Componentes/Formulario/Formulario';
import axios from 'axios';
import { useState } from 'react';

const productoInicial = {
  titulo:"",
  precio:0,
  descripcion:"",
}


const App = () => {

  const [nuevoProducto,setNuevoProducto] = useState(productoInicial);

  const crearProducto = (e) =>{
    e.preventDefault();
    if(nuevoProducto.titulo && nuevoProducto.precio>=0 && nuevoProducto.descripcion){
      axios.post("http://localhost:8080/api/productos",nuevoProducto)
        .then( productoCreado => console.log(productoCreado))
        .catch(err => console.log(err));
  
      setNuevoProducto(productoInicial);
    }
  }

  const modificarNuevoProducto = (e) =>{
    setNuevoProducto({
      ...nuevoProducto,
      [e.target.id]:e.target.value
    });
  }

  return (
    <div className="App">
      <Formulario nuevoProducto={nuevoProducto} crearProducto={crearProducto} modificarNuevoProducto={modificarNuevoProducto}/>
    </div>
  );
}

export default App;
