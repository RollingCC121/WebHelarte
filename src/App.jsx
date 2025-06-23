import React from 'react';

// Importar componentes
import TopBar from "./components/topbar";
import Hero from "./components/hero";
import BannerCombos from "./components/bannerCombos";
import MenuFlavors from "./components/menuFlavors";
import FloatingButtons from "./components/floatingbuttons";
import Footer from "./components/footer";

// Importar estilos globales
import './index.css';

// Componente principal
export default function App() {
  return (
    <div className="app-container">
      <TopBar />
      <main className="content">
        <Hero />
        <BannerCombos/>
        <MenuFlavors/>
        <Footer/>
      </main>
      <FloatingButtons />
    </div>
  );
}
