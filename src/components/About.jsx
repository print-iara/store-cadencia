import Libro from "../assets/libros.jpg";
import "../styles/Header.css";

const About = () => {
  return (
    <div className='container bg-light my-5 d-flex p-5 flex-wrap'>
      <div className="col-lg-6 col-sm-12"> <h3 className="letra">Cadencia nació de la pasión por los objetos con historia</h3>
        <div className='fs-6 lh-lg pb-5  px-2'>
          Somos Iara y Joaquín, dos almas curiosas que coleccionan momentos, texturas y formas que alguna vez decoraron otros tiempos.

          Nuestra tienda es un rincón donde lo antiguo se encuentra con lo actual.
          Restauramos, curamos y seleccionamos cada pieza con dedicación, buscando belleza en lo imperfecto y valor en lo olvidado.

          Creemos en los objetos que cuentan algo más que su función.
          Bienvenidos a Cadencia, donde cada objeto cuenta una historia.
          <br />

          ✨ Gracias por acompañarnos.
        </div>
        
        </div>
        <div className="col-4 d-sm-none d-lg-block   d-flex justify-end-center align-items-start pt-5">
          <img src={Libro} alt=""  width="450" />
        </div>
    </div>
  )
}

export default About