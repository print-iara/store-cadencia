import React, { use, useState } from 'react';
import { useProductosContext } from '../contexts/ProductosContext';
import { useAuthContext } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FormularioProducto() {
  const { agregarProducto } = useProductosContext();

  const { admin } = useAuthContext();

  const [producto, setProducto] = useState({
    name: '',
    price: '',
    description: '',
    image: ""
  });

  const validarFormulario = () => {
    if (!producto.name.trim()) {
      return ("El nombre es obligatorio.")
    }
    if (!producto.price || producto.price <= 0) {
      return ("El precio debe ser mayor a 0.")
    }
    console.log(producto.description.trim())
    if (!producto.description.trim() || producto.description.length < 10) {
      return ("La descripción debe tener al menos 10 caracteres.")
    }
    if (!producto.image.trim()) {
      return ("La url de la imgaen no debe estar vacía")
    }
    else {
      return true
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      agregarProducto(producto);

      setProducto({ name: '', precio: '', descripcion: '', image: '' });
     
      setErrores({});
    }
    return (
      <>
       
        {errores.nombre && <p style={{ color: 'red' }}>{errores.nombre}</p>},
        {errores.precio && <p style={{ color: 'red' }}>{errores.precio}</p>}
        {errores.descripcion && <p style={{ color: 'red' }}>{errores.descripcion}</p>}
      </>
    )
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    const validarForm = validarFormulario()
    if (validarForm == true) {
      agregarProducto(producto).then((data) => {
        setProducto({ name: '', price: '', description: '' });
         toast.success("Producto agregado correctamente!");
      }).catch((error) => {
        toast.error("Hubo un problema al agregar el producto");
      })
    } else {
      toast.error(validarForm);
    }
  }

  if (!admin) {
    return (
      <Navigate to="/login" replace />
    )
  }

  return (
    <> <ToastContainer />
    <form className="col-lg-4 col-md-6 col-sm-8 bg bg-white p-4 border rounded shadow m-auto mt-3" onSubmit={handleSubmit2}>
      <h4 className='text-dark text-opacity-75'>Agregar Producto</h4>
      <div className='mb-3'>
        <label className="form-label">Nombre:</label>
        <input
          type="text" name="name" value={producto.name} onChange={handleChange} className='form-control' required />
      </div>
      <div>
        <label>URL de la Imagen</label>
        <input
          type="text" name="image" value={producto.image} onChange={handleChange} className='form-control' required />
      </div>
      <div>
        <label className="form-label">Precio:</label>
        <input type="number" name="price" value={producto.price} onChange={handleChange} className='form-control' required
          min="0" />
      </div>
      <div>
        <label className="form-label">Descripción:</label>
        <textarea
          name="description"
          value={producto.description}
          onChange={handleChange}
          className='form-control'
          required
        />
      </div>
      <Button className="btn-sm  mt-3 mb-5" variant='dark' type="submit">Agregar Producto</Button>
    </form>
    </>
  );
}

export default FormularioProducto;



