import React from 'react'
import "../styles/Header.css"
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';




const Main = () => {
    return (
        <main style={{ padding: "20px", color: '#222', backgroundColor: '#f9f9f9' }}>
            <h3 className='letra'>Visita nuestra tienda online</h3>
            <Button className="btn-sm ms-2 " variant="dark"><Link to={"/productos"} style={{ color: 'white', textDecoration: 'none' }}>ingresa Aqui!!</Link></Button>
          
        </main>
    )
}

export default Main