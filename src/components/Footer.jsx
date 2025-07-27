import { Link } from 'react-router-dom'
import Logo from '../assets/logo-cadencia.png'
import Mapa from '../assets/mapa.png'
import "../styles/Footer.css" // Assuming you have a CSS file for styling the footer
const Footer = () => {
    return (
        <footer >
            <div className="footer_container_left">
                <p className="cont_logo">
                    <img className="logo_footer" src={Logo} alt="" />
                </p>
                <ul className="footer_link">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/carrito">Carrito</Link></li>
                    <li><Link to="/sobrenosotros">Sobre Nosotros</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </div>
            <div className="footer_container_right">
                <p className="titulo_footer">Nuestro Local</p>
               <img src={Mapa} className='mapa' alt="mapa de nuestra ubicación" />
                <p className="direccion">Ortiz de Ocampo 1530, Ciudad Autonoma de Buenos Aires</p>
            </div>
            <div className="derechos">
                <p >&copy; 2024 Cadencia Store. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer