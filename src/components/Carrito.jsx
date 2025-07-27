import "../styles/Carrito.css"
import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import CarritoCard from "./CarritoCard.jsx";
import { CarritoContext } from "../contexts/CarritoContexto.jsx";
import { useAuthContext } from '../contexts/AuthContext.jsx';
import { Button } from "react-bootstrap";

const Carrito = () => {
    const { productosCarrito, vaciarCarrito, borrarProductoCarrito,total } = useContext(CarritoContext); 
  
    const { user } = useAuthContext();
   

    const funcionDisparadora = (id) => {
        borrarProductoCarrito(id)
    }
    if (!user) {
        return (
            <Navigate to="/login" replace />
        )
    }

    return (
        <div className="carrito-container">
       {productosCarrito.length > 0 ?  <Button className="btn-sm mt-3" variant="dark" onClick={() => vaciarCarrito()}>Vaciar Carrito</Button> : " "}
           
            {productosCarrito.length > 0 ? productosCarrito.map((producto) => (
                <CarritoCard producto={producto} funcionDisparadora={funcionDisparadora} />
            ))
                : <p>Carrito vacio</p>}
            {total > 0 ? <p className="carrito-total">Total a pagar: $ {total}</p> : <></>}
        </div>
    )
}


export default Carrito