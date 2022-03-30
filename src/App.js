import './App.css';
import Formulario from './Componentes/Formulario/Formulario';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import ListaProductos from './Componentes/ListaProductos/ListaProductos';
import DetalleProducto from './Componentes/DetalleProducto/DetalleProducto';
import FormularioEditar from './Componentes/FormularioEditar/FormularioEditar';

const productoInicial = {
  titulo:"",
  precio:0,
  descripcion:""
}


const App = (props) => {

  const [producto,setProducto] = useState(productoInicial);

  const [listaProductos, setListaProductos] = useState([]);
  
  useEffect(() =>{
    axios.get("http://localhost:8080/api/productos")
      .then(response => {
        setListaProductos((prev) => response.data)
      })
      .catch(err => console.log(err));
  },[])

  const crearProducto = (producto) =>{
    if(producto.titulo && producto.precio>=0 && producto.descripcion){
      axios.post("http://localhost:8080/api/productos",producto)
        .then( response => setListaProductos(prev => [...prev,response.data]))
        .catch(err => console.log(err));
  
      setProducto(productoInicial);
    }
  }

  const editarProducto = (e) =>{
    const id = e.target.id.value;
    const datosaActualizar = {
      titulo: e.target.titulo.value,
      precio:e.target.precio.value,
      descripcion:e.target.descripcion.value
    }

    axios.put("http://localhost:8080/api/productos/"+id,datosaActualizar)
      .then(response => {
        let productosActualizados = [...listaProductos];
        const indice = productosActualizados.findIndex((producto) => producto._id === id);
        productosActualizados[indice] = response.data;
        setListaProductos(productosActualizados);
      })
  }

  


  return (
    <div>
        <Switch>
          <Route exact path="/" render={(routerProps) =>{
            return(
            <>
              <Formulario productoInicial={producto} submitAction={crearProducto} {...routerProps}/>
              <ListaProductos listaProductos={listaProductos} setListaProductos={setListaProductos} {...routerProps}/>
            </>
            )
          }}/>
          <Route exact path="/:id" render={(routerProps) => <DetalleProducto {...routerProps} listaProductos={listaProductos}/>}/>
          <Route path="/:id/editar" render={(routerProps) => <FormularioEditar productoInicial={producto} {...routerProps}/>}/>
        </Switch>
    </div>
  );
}

export default withRouter(App);
