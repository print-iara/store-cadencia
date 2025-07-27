import Swal from 'sweetalert2';


export const dispararSweetBasico = (title, text, icon, textoBoton) => {
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        confirmButtonText: textoBoton
    })
}

