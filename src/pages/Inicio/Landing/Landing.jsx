import Header from "../../../componentes/Header/Header";
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
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestra Galería</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg"].map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform">
              <img src={`/images/${img}`} alt={`Foto ${idx + 1}`} className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/galeria" className="bg-blue-400 hover:bg-blue-500 px-6 py-3 rounded-full text-lg font-semibold text-white">
            Ver Más
          </Link>
        </div>
      </section>
    </div>
    </>
    
  );
}

