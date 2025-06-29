import React from 'react';

// Importar componentes
import Header from './components/header';
import ProductCategories from './components/productcategories';
import FeaturedSection from './components/featuredsection';
import Footer from './components/footer';
import FloatingCart from './components/floatingcart';
import FloatingButtons from './components/floatingbuttons';
import CartProvider from './components/cartcontext';
import CombosSection from './components/combossection';
import AboutUs from './components/aboutus';

// Importar estilos globales
import './index.css';

// Componente principal
export default function App() {
  return (
    <CartProvider>
      <div className="app-container">
        <Header id="inicio" />
        <main>
          <section id="combos">
            <CombosSection />
          </section>
          <section id="sabores">
            <ProductCategories />
            <FeaturedSection />
          </section>
          <section id="nosotros">
            <AboutUs />
          </section>
          <Footer />
        </main>
        <FloatingButtons />
      </div>
    </CartProvider>
  );
}
