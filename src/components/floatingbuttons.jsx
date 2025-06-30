import React, { useState } from 'react'
import { MessageCircle, Instagram, Truck, X, Plus } from 'lucide-react'
import '../styles/floatingbuttons.css'

const FloatingButtons = () => {
  const [isOpen, setIsOpen] = useState(false)

  const socialButtons = [
    {
      id: 'whatsapp',
      icon: MessageCircle,
      label: 'WhatsApp',
      onClick: handleWhatsApp,
      className: 'whatsapp-btn',
      delay: '0.1s',
      // Opcional: usar PNG en lugar del icono de Lucide
      pngSrc: '', // Agregar ruta del PNG aquí: '/images/whatsapp-icon.png'
    },
    {
      id: 'instagram',
      icon: Instagram,
      label: 'Instagram',
      onClick: handleInstagram,
      className: 'instagram-btn',
      delay: '0.2s',
      // Opcional: usar PNG en lugar del icono de Lucide
      pngSrc: '', // Agregar ruta del PNG aquí: '/images/instagram-icon.png'
    },
    {
      id: 'rappi',
      icon: Truck,
      label: 'Rappi',
      onClick: handleRappi,
      className: 'rappi-btn',
      delay: '0.3s',
      // Opcional: usar PNG en lugar del icono de Lucide
      pngSrc: '', // Agregar ruta del PNG aquí: '/images/rappi-icon.png'
    }
  ]

  function handleWhatsApp() {
    const phoneNumber = '573202802760'
    const message = encodeURIComponent('¡Hola! Me interesan sus helados artesanales de Helarte 🍦')
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  function handleInstagram() {
    const instagramUrl = 'https://instagram.com/helarte_paletas'
    window.open(instagramUrl, '_blank')
  }

  function handleRappi() {
    const rappiUrl = 'https://www.rappi.com.co/tiendas/900433644-helartepaletasartesanales-mt-nc'
    window.open(rappiUrl, '_blank')
  }

  const toggleButtons = () => {
    setIsOpen(!isOpen)
  }

  const renderButtonIcon = (button) => {
    // Si hay un PNG definido, usarlo; sino usar el icono de Lucide
    if (button.pngSrc) {
      return (
        <div className="icon-container">
          <img 
            src={button.pngSrc} 
            alt={button.label}
            onError={(e) => {
              // Fallback al icono de Lucide si el PNG falla
              e.target.style.display = 'none'
              e.target.parentElement.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/><path d="M9 10a3 3 0 0 0 5 2l3-3 2 2 4-4"/></svg>`
            }}
          />
        </div>
      )
    } else {
      // Usar icono de Lucide React
      const IconComponent = button.icon
      return <IconComponent size={20} />
    }
  }

  return (
    <div className="floating-buttons-container">
      {/* Botones sociales */}
      {socialButtons.map((button, index) => (
        <button
          key={button.id}
          className={`social-btn ${button.className} ${isOpen ? 'show' : ''}`}
          onClick={button.onClick}
          style={{ 
            '--delay': button.delay,
            '--index': socialButtons.length - index
          }}
          aria-label={button.label}
        >
          {renderButtonIcon(button)}
          <span className="btn-tooltip">{button.label}</span>
        </button>
      ))}

      {/* Botón principal toggle */}
      <button
        className={`main-toggle-btn ${isOpen ? 'open' : ''}`}
        onClick={toggleButtons}
        aria-label={isOpen ? 'Cerrar menú social' : 'Abrir menú social'}
      >
        {isOpen ? <X size={20} /> : <Plus size={20} />}
      </button>

      {/* Overlay para cerrar en móvil */}
      {isOpen && (
        <div 
          className="floating-overlay" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}

export default FloatingButtons