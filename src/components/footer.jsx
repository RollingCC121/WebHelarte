import React from 'react'
import '../styles/footer.css'

const Footer = () => {
  const contactInfo = {
    address: {
      street: 'CRA 49 #52-107',
      area: 'Junín, Medellín',
      country: 'Colombia'
    },
    contact: {
      phone: '+573202802760',
      email: 'helartepaletas@outlook.com',
      website: 'www.helarte.co'
    },
    hours: [
      { day: 'Lunes - domingo', time: '10:00 - 18:00' }
    ],
    delivery: []
  }

  const socialLinks = [
    { 
      icon: '📱', 
      label: 'WhatsApp',
      action: () => openWhatsApp()
    },
    { 
      icon: '📷', 
      label: 'Instagram',
      action: () => openInstagram()
    },
    { 
      icon: '🚚', 
      label: 'Rappi',
      action: () => openRappi()
    }
  ]

  const openWhatsApp = () => {
    const phoneNumber = '573202802760'
    const message = encodeURIComponent('¡Hola! Me interesan sus helados artesanales de Helarte 🍦. Me gustaría conocer más sobre sus productos y precios.')
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  const openInstagram = () => {
    const instagramUrl = 'https://instagram.com/helarte_paletas'
    window.open(instagramUrl, '_blank')
  }

  const openRappi = () => {
    const rappiUrl = 'https://www.rappi.com.co/tiendas/900433644-helartepaletasartesanales-mt-nc'
    window.open(rappiUrl, '_blank')
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>📍 Ubicación</h4>
          <p>{contactInfo.address.street}</p>
          <p>{contactInfo.address.area}</p>
          <p>{contactInfo.address.country}</p>
          
          <h4 style={{ marginTop: '20px' }}>📞 Contacto</h4>
          <div className="contact-item">
            <span className="contact-icon">📱</span>
            <span>{contactInfo.contact.phone}</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <span>{contactInfo.contact.email}</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">🌐</span>
            <span>{contactInfo.contact.website}</span>
          </div>
        </div>

        <div className="footer-section">
          <h4>🕒 Horarios</h4>
          {contactInfo.hours.map((schedule, index) => (
            <div key={index} className="hours-item">
              <span>{schedule.day}</span>
              <span>{schedule.time}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Helarte. Todos los derechos reservados.</p>
        <p>Helados artesanales hechos con amor en Medellín 🇨🇴</p>

        <div className="social-links">
          {socialLinks.map((social, index) => (
            <button
              key={index}
              className="social-link"
              onClick={social.action}
              aria-label={social.label}
            >
              {social.icon}
            </button>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer