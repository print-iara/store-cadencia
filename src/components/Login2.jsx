import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';
import { crearUsuario, loginEmailPass } from '../auth/firebase';
import { dispararSweetBasico } from '../assets/SweetAlert';

function Login2() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(true)
  const { login, user, logout, admin } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación de autenticación
    if (usuario === 'admin' && password === '1234') {
      login(usuario);
      navigate('/');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  function registrarUsuario(e) {
    e.preventDefault();
    crearUsuario(usuario, password).then((user) => {
      login(usuario)
      dispararSweetBasico("Registro exitoso", "", "success", "Confirmar")
    }).catch((error) => {
      if (error.code == "auth/invalid-credential") {
        dispararSweetBasico("Credenciales incorrectas", "", "error", "Cerrar")
      } if (error.code == "auth/weak-password") {
        dispararSweetBasico("Contraseña debil", "Password should be at least 6 characters", "error", "Cerrar")
      }
      //alert("Error")
    })
  }

  const handleSubmit2 = (e) => {
    logout()
  }

  function iniciarSesionEmailPass(e) {
    e.preventDefault();
    loginEmailPass(usuario, password).then((user) => {
      login(usuario)
      dispararSweetBasico("Logeo exitoso", "", "success", "Confirmar")
    }).catch((error) => {
      if (error.code == "auth/invalid-credential") {
        dispararSweetBasico("Credenciales incorrectas", "", "error", "Cerrar")
      }
      //alert("Error")
    })
  }

  function handleShow(e) {
    e.preventDefault();
    setShow(!show)
  }

  if (user || admin) {
    return (
      <form onSubmit={handleSubmit2}>
        <div className="col-md-4 p-4  m-auto">
        <button className='btn btn-secondary  ' type="submit">Cerrar sesión</button>
        </div>
      </form>
    )
  } if (!user && show) {
    return (
      <div>
        <form className="col-lg-4 col-md-6 col-sm-8 bg bg-white p-4 border rounded shadow m-auto mt-3" onSubmit={iniciarSesionEmailPass} >
          <h4 className='text-dark text-opacity-75'>Iniciar sesión con Email y pass</h4>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className='form-control'
              required
            />
          </div>
          <div>
            <label className='form-label'>Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='form-control'
              required
            />
          </div>
          <button type="submit" className='btn btn-primary w-100 mt-4'>Iniciar sesión</button>
        </form>
        <div className="col-md-4 p-4  m-auto">
          <p>Si aun no estas registado!</p><button className='btn btn-primary w-100 ' style={{ marginTop: "2px" }} onClick={handleShow}>Registrate</button></div>
        
      </div>
    )
  } if (!user && !show) {
    return (
      <div>
        <form className="col-lg-4 col-md-6 col-sm-8 bg bg-white p-4 border rounded shadow m-auto mt-3" onSubmit={registrarUsuario}>
          <h4 className='text-dark text-opacity-75'>Registrarse</h4>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className='form-control'
              required
            />
          </div>
          <div>
            <label className="form-label">Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='form-control'
              required
            />
          </div>
          <button className='btn btn-primary w-100 ' type="submit">Registrase</button>
        </form>
        <div className="col-md-4 p-4  m-auto">
          <p>Si ya estas registado!</p>
        <button className='btn btn-primary w-100 ' style={{ marginTop: "2px" }} onClick={handleShow}>Iniciar Sesión</button>
        </div>
      </div>
    )
  }

}
export default Login2;

