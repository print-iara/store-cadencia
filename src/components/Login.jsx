import "../styles/Login.css";
const Login = ({ setLogeadoUser, setLogeadoAdmin, user, admin }) => {
    return (
        <div>
            <button className="boton-login" onClick={setLogeadoUser}>{user ? "Cerrar sesion" : "Iniciar sesion"}</button>
            <button className="boton-login" onClick={setLogeadoAdmin}>{admin ? "Cerrar sesion Admin" : "Iniciar sesion Admin"}</button>
        </div>
    )
}

export default Login



