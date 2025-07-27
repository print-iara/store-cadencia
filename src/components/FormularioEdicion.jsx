import { useEffect, useState } from "react";
import { Link, useParams,Navigate } from "react-router-dom";
import { useProductosContext } from "../contexts/ProductosContext";
import { useAuthContext } from "../contexts/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "react-bootstrap";

function FormularioEdicion({ }) {
  const {admin} = useAuthContext();
  const {obtenerProducto, productoEncontrado, editarProducto} = useProductosContext();
  const { id } = useParams();
  const [producto, setProducto] = useState(productoEncontrado);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  
  if(!admin){
    return(
      <Navigate to="/login" replace/>
    )
  }

  useEffect(() => {
    obtenerProducto(id).then(() => {
      //setProducto(productoEncontrado)
      setCargando(false);
    }).catch((error) => {
      if(error == "Producto no encontrado"){
        setError("Producto no encontrado")
      }
      if(error == "Hubo un error al obtener el producto."){
        setError("Hubo un error al obtener el producto.");
      }
      setCargando(false);
    })
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const validarFormulario = () => {
    if (!producto.name.trim()) {
      return("El nombre es obligatorio.")
    }
    if (!producto.price || producto.price <= 0) {
      return("El precio debe ser mayor a 0.")
    }
    console.log(producto.description.trim())
    if (!producto.description.trim() || producto.description.length < 10) {
      return("La descripción debe tener al menos 10 caracteres.")
    }
    if(!producto.image.trim()){
      return("La url de la imgaen no debe estar vacía")
    }
    else{
      return true
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validarForm = validarFormulario()
    if(validarForm == true){
      editarProducto(producto).then((prod) => {
        toast.success("Producto Editado correctamente!");
      }).catch((error) => {
        alert('Hubo un problema al actualizar el producto. ' + error.message);
      })
    }else{
      dispararSweetBasico("Error en la carga de producto", validarForm, "error", "Cerrar")
    }

  };

  return (
    <>
    <ToastContainer />
    <form onSubmit={handleSubmit} className="col-lg-4 col-md-6 col-sm-8 bg bg-white p-4 border rounded shadow m-auto mt-3">
      <h4 className='text-dark text-opacity-75'>Editar Producto</h4>
      <div className='mb-3'>
        <label className="form-label">Nombre:</label>
        <input
          type="text"
          name="name"
          value={producto.name || ''}
          onChange={handleChange}
          className='form-control'
          required
        />
      </div>
      <div>
        <label className="form-label">URL de la Imagen</label>
        <input
          type="text" name="image" value={producto.image} 
          className='form-control'onChange={handleChange} required/>
      </div>
      <div>
        <label className="form-label">Precio:</label>
        <input
          type="text"
          name="price"
          value={producto.price || ''}
          onChange={handleChange}
          className='form-control'
          required
          min="0"
        />
      </div>
      <div>
        <label className="form-label">Descripción:</label>
        <textarea
          name="description"
          value={producto.description || ''}
          onChange={handleChange}
          className='form-control'
          required
        />
      </div>
      <Button className="btn-sm  mt-3 mb-5" variant='dark'  type="submit">Actualizar Producto</Button>
      
    </form></>
  );
}

export default FormularioEdicion