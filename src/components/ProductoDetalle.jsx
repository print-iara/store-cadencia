import { useState, useEffect, useContext } from "react";
import { useParams, Link, redirectDocument, useNavigate } from "react-router-dom";
import "../styles/ProductoDetalle.css";
import { dispararSweetBasico } from "../assets/SweetAlert";
import { CarritoContext } from "../contexts/CarritoContexto.jsx";
import { useProductosContext } from "../contexts/ProductosContext.jsx";
import { useAuthContext } from "../contexts/AuthContext.jsx";
import { Button } from "react-bootstrap";


const ProductoDetalle = () => {
  const { admin, user } = useAuthContext();
  const { agregarAlCarrito } = useContext(CarritoContext);
  const { productoEncontrado, obtenerProducto, eliminarProducto } = useProductosContext();

  const navegar = useNavigate();

  const { id } = useParams();

  const [cargando, setCargando] = useState(true);
  const [cantidad, setCantidad] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    obtenerProducto(id).then(() => {
      setCargando(false);
    })
      .catch((error) => {
        if (error === "Producto no encontrado") {
          setError("Producto no encontrado");
        }
        if (error === "Hubo un error al obtener el producto.") {
          setError("Hubo un error al obtener el producto.");
        }
        setCargando(false);
      });
  }, [id]);



  function funcionCarrito() {
    if (cantidad < 1) return;
    dispararSweetBasico("Producto Agregado", "El producto fue agregado al carrito con éxito", "success", "Cerrar");
    agregarAlCarrito({ ...productoEncontrado, cantidad });
  }

  function dispararEliminar() {
    eliminarProducto(id).then(() => {
      navegar("/productos")
    }).catch((error) => {
      dispararSweetBasico("Hubo un problema al agregar el producto", error, "error", "Cerrar")
    })
  }

  function sumarContador() {
    setCantidad(cantidad + 1);
  }

  function restarContador() {
    if (cantidad > 1) setCantidad(cantidad - 1);
  }

  if (cargando) return <p>Cargando producto...</p>;
  if (error) return <p>{error}</p>;
  if (!productoEncontrado) return null;
  return (
    <div className="detalle-container bg-light pb-3 mb-3" >
      <img src={productoEncontrado.image} alt={productoEncontrado.name} className="detalle-imagen" />
      <div className="detalle-info">
        <h4 className="mb-0 ">{productoEncontrado.name}</h4>
        <p>{productoEncontrado.description}</p>
        <p className="mb-1">${productoEncontrado.price}</p>
        <div className="contador-container">
          <Button className="btn-sm me-2" variant="dark" onClick={restarContador}>-</Button>
          <span>{cantidad}</span>
          <Button className="btn-sm ms-2" variant="dark" onClick={sumarContador}>+</Button>
        </div>
        {user&&!admin ? <Button onClick={funcionCarrito} className="btn-sm w-100 mt-3" variant="dark">Agregar al carrito</Button> : <></>}
        {admin ? <Link to="/admin/editarProducto"><Button className="btn-sm w-100 mt-3" variant="dark">Editar producto</Button> </Link> : <></>}


        {admin ? <Button onClick={dispararEliminar} className="btn-sm w-100 mt-3" variant="danger">Eliminar Producto</Button> : <></>}
        {!user&&!admin ? <p className="mt-3 px-5">Para agregar productos al carrito, debes<Link to="/login"><span className="text-primary ms-2">iniciar sesión.</span></Link> </p> : <></>}

      </div>

    </div>
  )
}

export default ProductoDetalle