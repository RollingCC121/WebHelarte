import React from 'react'
import { Menu } from 'lucide-react'
import '../styles/header.css'
import CompactDropdownMenu from './dropdownmenu'

const featuredPopsicles = [
  {
    id: 1,
    name: 'Fresa\nCrema',
    category: 'leche',
    gradient: 'linear-gradient(45deg, #ff9ff3, #f368e0)',
    imageUrl: '/images/fresa.png',
    alt: 'Fresa Crema'
  },
  {
    id: 2,
    name: 'Limón\nNatural',
    category: 'agua',
    gradient: 'linear-gradient(45deg, #74b9ff, #0984e3)',
    imageUrl: '/images/limon.png',
    alt: 'Limón Natural'
  },
  {
    id: 3,
    name: 'Chocolate\nIntenso',
    category: 'leche',
    gradient: 'linear-gradient(45deg, #6c5ce7, #a29bfe)',
    imageUrl: '/images/chocolate.png',
    alt: 'Chocolate'
  }
];

const Header = (props) => {
  const handlePopsicleClick = (category) => {
    // Aquí puedes navegar o filtrar por categoría si lo deseas
  };

  const handleExploreClick = () => {
    const section = document.getElementById('sabores');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header" id={props.id}>
      <div className="header-background"></div>
      <nav className="header-nav">
        <div className="logo-brand">
          <div className="logo">
            <img
              src="/images/helarte.png"
              alt="Helarte Logo"
              className="logo-img"
            />
          </div>
          <div className="brand-text">
            <h1 className="brand-name">Helarte</h1>
            <p className="brand-subtitle">Artesanal</p>
          </div>
        </div>
        <CompactDropdownMenu />
      </nav>

      <div className="header-showcase">
        <h2 className="showcase-title">Sabores Únicos y Auténticos</h2>
        <p className="showcase-description">
          Cada paleta es una obra de arte hecha con ingredientes naturales 
          y mucho amor por la tradición artesanal
        </p>

        <div className="featured-popsicles">
          {featuredPopsicles.map((popsicle) => (
            <div 
              key={popsicle.id}
              className="featured-popsicle"
              onClick={() => handlePopsicleClick(popsicle.category)}
              style={{
                background: `${popsicle.gradient}, url(${popsicle.imageUrl}) center/cover`,
                backgroundBlendMode: 'overlay'
              }}
            >
              <div className="popsicle-label">
                {popsicle.name.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index === 0 && <br />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="header-action">
          <button 
            className="explore-btn" 
            onClick={handleExploreClick}
          >
            Explorar Sabores
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
