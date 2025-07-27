import Logo from '../assets/logocadencia.png'
import Logo2 from '../assets/logo-cadencia.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { CarritoContext } from '../contexts/CarritoContexto.jsx';
import { useAuthContext } from "../contexts/AuthContext";
import { FaShoppingCart } from "react-icons/fa";

const Nav = () => {
    const {productosCarrito} = useContext(CarritoContext)
    const {user, admin} = useAuthContext();

  
    return (
        <nav className='container-fluid bg bg-white py-4 mt-0' >
            <ul style={{  listStyleType: 'none', display: 'flex', justifyContent: 'space-around', margin: 0, padding: 0 }}>
                <li  className='pt-3'>
                    <Link to="/" className='pt-3' style={{ color: '#222', textDecoration: 'none' }}><img style={{ width: 80, marginTop: -20 }} src={Logo2} /></Link >
                </li>

                <li >
                    <Link to="/" style={{ color: '#222', textDecoration: 'none' }}>Inicio </Link>
                </li>
                <li >
                    <Link to="/productos" style={{ color: '#222', textDecoration: 'none' }}>Productos</Link >
                </li>
                {user?
                <li >
                    <Link to="/carrito" style={{ color: '#222', textDecoration: 'none' }}><FaShoppingCart />
                        {productosCarrito.length > 0 ? <span style={{ backgroundColor: '#063a87', color: 'white', borderRadius: '15px', marginLeft: '5px', paddingRight: '5px', fontWeight: '500' }}> {productosCarrito.length}   </span> : ''}

                    </Link >
                </li>:<></>}
                <li >
                    <Link to="/sobrenosotros" style={{ color: '#222', textDecoration: 'none' }}>Nosotros</Link >
                </li>
                <li >
                    <Link to="/contacto" style={{ color: '#222', textDecoration: 'none' }}>Contacto</Link >
                </li>
                {admin?
                <li >
                    <Link to="/admin" style={{ color: '#222', textDecoration: 'none' }}>Admin</Link >
                </li>:<></>}
                <li><Link to="/login" style={{ color: "222", textDecoration: "none" }}>Login</Link></li>
               {admin? <li><Link to="/admin/agregarProductos" style={{ color: "#222", textDecoration: "none" }}>Agregar productos</Link></li>:<></>}
            </ul>

        </nav>
    )
}

export default Nav