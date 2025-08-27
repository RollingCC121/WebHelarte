import React from 'react'
import '../styles/aboutus.css'

const AboutUs = () => {
  const features = [
    {
      icon: '🌟',
      title: 'Visión',
      text: 'Queremos convertirnos en la heladería artesanal más grande de la ciudad, ofreciendo sabores auténticos que crean momentos inolvidables.'
    },
    {
      icon: '💛',
      title: 'Misión',
      text: 'En Helarte, fusionamos sabor y arte en cada paleta, utilizando ingredientes naturales y sostenibles para brindarte una experiencia única, cuidando siempre del planeta y de nuestros clientes.'
    },
    {
      icon: '📢',
      
      text: '¡Únete a nuestra historia y disfruta de la magia de lo artesanal! 🌱🍨💫'
    },
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
      </div>
    </section>
  )
}

export default AboutUs