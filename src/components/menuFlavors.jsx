import { useState } from "react";
import "../styles/menuFlavors.css"; 

const saboresData = [
  { nombre: "Fresa", tipo: "temporada", imagen: "/images/fresa.png" },
  { nombre: "Limón", tipo: "agua", imagen: "/images/limon.png" },
  { nombre: "Vainilla", tipo: "leche", imagen: "/images/vainilla.png" },
  { nombre: "Coco", tipo: "leche", imagen: "/images/coco.png" },
  { nombre: "Maracuyá", tipo: "agua", imagen: "/images/maracuya.png" },
  { nombre: "Mango", tipo: "temporada", imagen: "/images/mango.png" },
];

const tipos = {
  agua: { color: "text-blue-600" },
  leche: { color: "text-pink-600" },
  temporada: { color: "text-green-600" },
};

export default function SaboresMenu() {
  const [filtro, setFiltro] = useState("todos");

  const saboresFiltrados =
    filtro === "todos"
      ? saboresData
      : saboresData.filter((sabor) => sabor.tipo === filtro);

  return (
    <div className="px-4 pt-6 pb-20 bg-gradient-to-b from-pink-50 via-white to-white min-h-screen">
      {/* Barra fija de filtros */}
      <div className="sabores-barra-fija">
        <div className="sabores-filtros">
          <span
            onClick={() => setFiltro("todos")}
            className={`sabor-link${filtro === "todos" ? " active" : ""}`}
          >
            All
          </span>
          {Object.keys(tipos).map((tipo) => (
            <span
              key={tipo}
              onClick={() => setFiltro(tipo)}
              className={`sabor-link${filtro === tipo ? " active" : ""}`}
            >
              {tipos[tipo].icono} {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
            </span>
          ))}
        </div>
      </div>

      {/* Lista de sabores */}
      <div className="sabores-grid">
        {saboresFiltrados.map((sabor) => (
          <div
            className="sabor-tarjeta"
            key={sabor.nombre}
            style={{ backgroundImage: `url(${sabor.imagen})` }}
          >
            <div className="sabor-tarjeta-overlay">
              <h3>{sabor.nombre}</h3>
              <p className={tipos[sabor.tipo].color}>
                {sabor.tipo.charAt(0).toUpperCase() + sabor.tipo.slice(1)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

