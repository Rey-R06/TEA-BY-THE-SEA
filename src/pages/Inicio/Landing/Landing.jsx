import Header from "../../../componentes/Header/Header";
import Galeria from "../Galeria/Galeria.jsx";
import "./Landing.css"
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <>
    <Header />
    <div>
      {/* Hero / Landing */}
      <section className="hero">
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold titulo">Tea by the Sea - Santa Cruz</h1>
          <p className="mt-4 max-w-2xl parrafo">
            Vive la experiencia única de un picnic frente al mar con té, bocadillos y una vista inolvidable.
          </p>
          <Link
            to="/reservas"
            className="botonReservar"
          >
            Reservar Ahora
          </Link>
        </div>
      </section>

      {/* Galería */}
      <Galeria />
    </div>
    </>
    
  );
}

