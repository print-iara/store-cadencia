import React from 'react'

import '../styles/Header.css'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/header1.jpg';
import img2 from '../assets/header2.jpg';
import img3 from '../assets/header3.jpg';


const Header = () => {
  return (
    <header className='header'>
    <h1 className='letra text-dark py-3'>Cadencia Tienda vintage </h1>
    <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Primera diapositiva" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="Segunda diapositiva" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Tercera diapositiva" />
        </Carousel.Item>
      </Carousel>
    
    </header>
  )
}

export default Header