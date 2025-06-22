import React from 'react';

// Importar componentes
import TopBar from "./components/topbar";
import Hero from "./components/hero";
import PopularFlavors from "./components/bannerCombos";
import Flavors from "./components/menuFlavors";
import FloatingButtons from "./components/floatingbuttons";

// Importar estilos globales
import './index.css';

// Componente principal
export default function App() {
  return (
    <div className="app-container">
      <TopBar />
      <main className="content">
        <Hero />
        <PopularFlavors />
        <Flavors/>
      </main>
      <FloatingButtons />
    </div>
  );
}
