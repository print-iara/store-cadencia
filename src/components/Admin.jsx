import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext.jsx";
import FormularioProducto from "./FormularioProducto.jsx";

export default function Admin() {
    const {user} = useAuthContext();

    if(!user){
        return(
            <Navigate to="/login" replace/>
        )
    }
 
    return(
        <div>
            
          
            <h4 className="py-4">Panel de administrador</h4>
            <FormularioProducto />
        </div>
    )
}