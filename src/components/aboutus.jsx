import React from 'react'
import '../styles/aboutus.css'

const AboutUs = () => {
  const features = [
    {
      icon: '🌱',
      title: '100% Natural',
      text: 'Sin conservantes ni químicos'
    },
    {
      icon: '👨‍🍳',
      title: 'Artesanal',
      text: 'Hecho a mano diariamente'
    },
    {
      icon: '🚚',
      title: 'Entrega Rápida',
      text: 'Llevamos frescura a tu puerta'
    },
    {
      icon: '⭐',
      title: 'Premium',
      text: 'Ingredientes de primera calidad'
    }
  ]

  const stats = [
    {
      number: '5+',
      label: 'Años de experiencia'
    },
    {
      number: '50+',
      label: 'Sabores únicos'
    },
    {
      number: '10K+',
      label: 'Clientes felices'
    }
  ]

  return (
    <section className="about-us">
      <h3>🍦 Sobre Nosotros</h3>
      <div className="about-content">
        <p className="about-description">
          En Helarte creamos helados artesanales con ingredientes 100% naturales. 
          Cada paleta es una obra de arte que combina sabores tradicionales con 
          innovación, brindando una experiencia única en cada bocado.
        </p>
        
        <div className="about-features">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <span className="feature-icon">{feature.icon}</span>
              <div className="feature-title">{feature.title}</div>
              <div className="feature-text">{feature.text}</div>
            </div>
          ))}
        </div>

        <div className="about-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUs