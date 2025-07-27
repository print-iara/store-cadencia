import Logo from '../assets/logocadencia.png';
import Logo2 from '../assets/logo-cadencia.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../contexts/CarritoContexto.jsx';
import { useAuthContext } from "../contexts/AuthContext";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

// Importa componentes de React Bootstrap
import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';

const Nav2 = () => { // Renombré a MyNav para evitar conflicto con importaciones de React-Bootstrap
    const { productosCarrito } = useContext(CarritoContext);
    const { user, admin } = useAuthContext();

    return (
        // Navbar principal
        <Navbar bg="white" expand="lg" className="py-3 sticky-top"> {/* bg="white" para fondo blanco, sticky-top para que se pegue arriba */}
            <Container > {/* container-fluid para que ocupe todo el ancho */}
                {/* Brand/Logo - Siempre visible */}
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={Logo2}
                        height="50" // Altura del logo
                        className="d-inline-block align-top"
                        alt="Logo Cadencia"
                    />
                </Navbar.Brand>

                {/* Botón Hamburguesa para dispositivos pequeños */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* Contenido del menú que colapsará/expandirá */}
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* mr-auto para empujar los elementos a la derecha (en flexbox) */}
                    <Nav className="ms-auto align-items-center"> {/* align-items-center para centrar verticalmente */}
                        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/productos">Productos</Nav.Link>

                   

                        <Nav.Link as={Link} to="/sobrenosotros">Nosotros</Nav.Link>
                        <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>

                        {/* Enlace a Admin (solo si el usuario es admin) */}
                        {admin && (
                            <NavDropdown title="Administrar" id="admin-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/admin">Panel Admin</NavDropdown.Item>
                             
                                {/* Puedes añadir más opciones de administración aquí */}
                            </NavDropdown>
                        )}

                             {/* Enlace al carrito (solo si el usuario está logueado) */}
                        {(user && !admin)? 
                            <Nav.Link as={Link} to="/carrito" className='mb-2 text-secondary'>
                                <FaShoppingCart />
                                {productosCarrito.length > 0 && (
                                    <Badge pill bg="dark"  style={{ fontSize: '0.6rem' }}>
                                        {productosCarrito.length}
                                    </Badge>
                                )}
                            </Nav.Link>:<></>
                        }

                        {/* Login / Perfil de usuario (opcional, podrías tenerlo aquí o en otro componente) */}
                        <Nav.Link as={Link} to="/login" className='mb-2 text-secondary'><FaUser/></Nav.Link>

                        {/* Si usas un botón para logout, podrías añadirlo aquí también */}
                        {/* {user && <Nav.Link onClick={handleLogout}>Cerrar Sesión</Nav.Link>} */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Nav2