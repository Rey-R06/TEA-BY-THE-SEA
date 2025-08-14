import "./Galeria.css";

export default function Galeria() {
  const imagenes = [
    { src: "/Img/inicio/playa2.jpg", titulo: "Picnic frente al mar", descripcion: "Una experiencia única con mantas, cojines y té." },
    { src: "/Img/inicio/playa4.jpg", titulo: "Tardes de té", descripcion: "Sabores y aromas que combinan perfectamente con el paisaje." },
    { src: "/Img/inicio/playa5.jpg", titulo: "Momentos especiales", descripcion: "Comparte y crea recuerdos inolvidables junto al mar." },
    { src: "/Img/inicio/playa6.jpg", titulo: "Brisa y tranquilidad", descripcion: "Déjate envolver por la calma del océano." }
  ];

  return (
    <section className="galeria-container">
      <h2 className="galeria-titulo">Explora la Magia de Tea by the Sea</h2>
      <p className="galeria-intro">
        En nuestra galería, te invitamos a descubrir la esencia de nuestras experiencias:
        combinamos elegancia, sabor y el entorno natural para crear momentos inolvidables.
      </p>
      {imagenes.map((img, index) => (
        <div
          key={index}
          className={`galeria-item ${index % 2 === 0 ? "normal" : "invertido"}`}
        >
          <img src={img.src} alt={img.titulo} className="galeria-img" />
          <div className="galeria-texto">
            <h3>{img.titulo}</h3>
            <p>{img.descripcion}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
