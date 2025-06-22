import { useState } from "react";
import "../styles/menuFlavors.css"; 

const saboresData = [
  { nombre: "Fresa", tipo: "temporada", imagen: "/images/fresa1.png" },
  { nombre: "Limón", tipo: "agua", imagen: "/images/fresa1.png" },
  { nombre: "Vainilla", tipo: "leche", imagen: "/images/fresa1.png" },
  { nombre: "Coco", tipo: "leche", imagen: "/images/fresa1.png" },
  { nombre: "Maracuyá", tipo: "agua", imagen: "/images/fresa1.png" },
  { nombre: "Mango", tipo: "temporada", imagen: "/images/fresa1.png" },
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
      <div className="grid grid-cols-2 gap-4">
        {saboresFiltrados.map((sabor) => (
          <div
            key={sabor.nombre}
            className="bg-white rounded-3xl shadow-md p-4 flex flex-col items-center transition hover:scale-105"
          >
            <img
              src={sabor.imagen}
              alt={sabor.nombre}
              className="w-20 h-20 rounded-full object-cover mb-2 shadow"
            />
            <h3 className="font-bold text-lg">{sabor.nombre}</h3>
            <p className={`text-sm mt-1 ${tipos[sabor.tipo].color}`}>
              {tipos[sabor.tipo].icono}{" "}
              {sabor.tipo.charAt(0).toUpperCase() + sabor.tipo.slice(1)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

