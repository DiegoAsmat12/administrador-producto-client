import './App.css';
import Formulario from './Componentes/Formulario/Formulario';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListaProductos from './Componentes/ListaProductos/ListaProductos';
import DetalleProducto from './Componentes/DetalleProducto/DetalleProducto';

const productoInicial = {
  titulo:"",
  precio:0,
  descripcion:"",
}


const App = () => {

  const [nuevoProducto,setNuevoProducto] = useState(productoInicial);

  const [listaProductos, setListaProductos] = useState([]);

  useEffect(() =>{
    axios.get("http://localhost:8080/api/productos")
      .then(response => {
        setListaProductos((prev) => response.data)
      })
      .catch(err => console.log(err));
  },[])
  
  const crearProducto = (e) =>{
    e.preventDefault();
    if(nuevoProducto.titulo && nuevoProducto.precio>=0 && nuevoProducto.descripcion){
      axios.post("http://localhost:8080/api/productos",nuevoProducto)
        .then( response => setListaProductos(prev => [...prev,response.data]))
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
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={(routerProps) =>{
            return(
            <>
              <Formulario nuevoProducto={nuevoProducto} crearProducto={crearProducto} modificarNuevoProducto={modificarNuevoProducto} {...routerProps}/>
              <ListaProductos listaProductos={listaProductos} {...routerProps}/>
            </>
            )
          }}/>
          <Route path="/:id" render={(routerProps) => <DetalleProducto {...routerProps} listaProductos={listaProductos}/>}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
