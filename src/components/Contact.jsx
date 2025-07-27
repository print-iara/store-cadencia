import React from 'react'

const Contact = () => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 bg-white p-4 my-3 border rounded shadow m-auto">
      <form className=''>
      <h3 className="mb-3">Formulario de Contacto</h3>
      <input type="text" className="form-control mb-3" placeholder="Nombre" />
      <input type="email" className="form-control mb-3" placeholder="Correo Electrónico" />
      <textarea className="form-control mb-3"  placeholder="Mensaje" rows="4"></textarea>
      <button className="btn btn-dark ">Enviar</button>
      </form>
    </div>
  )
}

export default Contact