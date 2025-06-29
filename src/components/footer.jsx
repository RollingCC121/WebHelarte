import React from 'react'
import '../styles/footer.css'

const Footer = () => {
  const contactInfo = {
    address: {
      street: 'Calle 85 #15-32',
      area: 'Zona Rosa, Bogotá',
      country: 'Colombia'
    },
    contact: {
      phone: '+57 300 123 4567',
      email: 'hola@helarte.co',
      website: 'www.helarte.co'
    },
    hours: [
      { day: 'Lunes - Viernes', time: '10:00 - 22:00' },
      { day: 'Sábados', time: '09:00 - 23:00' },
      { day: 'Domingos', time: '11:00 - 21:00' },
      { day: 'Festivos', time: '12:00 - 20:00' }
    ],
    delivery: [
      { zone: 'Zona Norte', time: '30-45 min' },
      { zone: 'Zona Sur', time: '45-60 min' },
      { info: 'Envío gratis desde $15.000', time: '' }
    ]
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
    },
    { 
      icon: '👥', 
      label: 'Facebook',
      action: () => openFacebook()
    }
  ]

  const openWhatsApp = () => {
    const phoneNumber = '573001234567'
    const message = encodeURIComponent('¡Hola! Me interesan sus helados artesanales de Helarte 🍦. Me gustaría conocer más sobre sus productos y precios.')
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  const openInstagram = () => {
    const instagramUrl = 'https://instagram.com/helarte_oficial'
    window.open(instagramUrl, '_blank')
  }

  const openRappi = () => {
    const rappiUrl = 'https://www.rappi.com/stores/helarte'
    window.open(rappiUrl, '_blank')
  }

  const openFacebook = () => {
    const facebookUrl = 'https://facebook.com/helarte.oficial'
    window.open(facebookUrl, '_blank')
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

          <h4 style={{ marginTop: '20px' }}>🚚 Delivery</h4>
          {contactInfo.delivery.map((delivery, index) => (
            <p key={index} style={{ fontSize: '12px' }}>
              {delivery.zone && `${delivery.zone}: ${delivery.time}`}
              {delivery.info && delivery.info}
            </p>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Helarte. Todos los derechos reservados.</p>
        <p>Helados artesanales hechos con amor en Bogotá 🇨🇴</p>
        
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