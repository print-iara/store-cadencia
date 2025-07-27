import { Button } from "react-bootstrap"
import "../styles/Carrito.css"

const CarritoCard = ({ producto, funcionDisparadora }) => {
     const borrarDelCarrito=()=> {
       
        funcionDisparadora(producto.id)
    }
    return (
        <div className="carrito-card " >
            <h4 className="carrito-titulo me-2" style={{ color: "black" }}>{producto.name}</h4>
            {<p className="descripcion-carrito" style={{ color: "black" }}>{producto.description}</p>}
            <img className="carrito-image" src={producto.image}></img>
            <span style={{ color: "black" }}>{producto.cantidad}</span>
            <div>
                <p style={{ color: "black" }}>Precio unitario</p>
                <span style={{ color: "black" }}>{producto.price} $</span>
            </div>
            <div>
                <p style={{ color: "black" }}>Precio total</p>
                <span style={{ color: "black" }}>{producto.cantidad * producto.price} $</span>
            </div>

            <Button className="btn-sm me-2 p-0" variant="danger" style={{ width:"20px", height:"20px",fontSize:"12px" }}  onClick={borrarDelCarrito} >X</Button>
        </div>
    )
}

export default CarritoCard