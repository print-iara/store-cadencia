import { useEffect } from 'react'
import './App.css'
import Home from './layouts/Home'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Nav2 from './components/Nav2'
import ProductosContainer from './components/ProductosContainer'
import Carrito from './components/Carrito'
import About from './components/About'
import Contact from './components/Contact'
import ProductoDetalle from './components/ProductoDetalle'
import Admin from './components/Admin'
import Login2 from './components/Login2'
import FormularioProducto from './components/FormularioProducto'
import FormularioEdicion from './components/FormularioEdicion'
import { useAuthContext } from './contexts/AuthContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer'

function App() {

  const {verificacionLog }=useAuthContext();
  
  useEffect(()=>{
        verificacionLog();
    },[])
  


  return (
    <Router>
      <>
        <Nav2 />
        <Routes>
          <Route path="/" element={<Home />} />
          {/*<Route path='/login' element={<Login usuarioLogeado={usuarioLogeado} adminLogeado={adminLogeado} setLogeadoAdmin={manejarAdmin} setLogeadoUser={manejarUser}/>} />*/}
          <Route path='/login' element={<Login2 />} />
          <Route path="/productos" element={<ProductosContainer />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/sobrenosotros" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="productos/:id" element={<ProductoDetalle />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/agregarProductos" element={<FormularioProducto  />} />
          <Route path="/admin/editarProducto" element={<FormularioEdicion />} />

        </Routes>
  
      </>
    </Router>
  )
}

export default App
