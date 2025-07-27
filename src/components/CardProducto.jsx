import { useState } from "react";
import "../styles/Productos.css"
import { dispararSweetBasico } from "../assets/SweetAlert";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CardProducto({ producto }) {
  console.log(producto)

  return (
    <Card className="card-producto h-100 d-flex flex-column" style={{ width: '280px', padding: '15px', border: 'none', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Card.Img className="card-imagen" variant="top" src={producto.image} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fs-5">{producto.name}</Card.Title>
        <div className="mt-auto">
          <div className="fs-6 ">${producto.price}</div>
          <Link to={"/productos/" + producto.id}>
            <Button className="btn-sm w-100 mt-3" variant="dark">Ver detalles del producto</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>

  )
}

export default CardProducto