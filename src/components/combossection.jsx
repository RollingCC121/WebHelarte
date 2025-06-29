import React from 'react'
import '../styles/combossection.css'

const CombosSection = () => {
  const combos = [
    {
      id: 1,
      title: 'Combo Familiar',
      subtitle: 'Perfecto para compartir',
      items: [
        '6 Paletas variadas',
        '2 Helados premium', 
        '1 Postre especial'
      ],
      originalPrice: 32000,
      price: 24900,
      savings: 7100,
      featured: true,
      placeholder: '👨‍👩‍👧‍👦',
      alt: 'Combo Familiar'
    },
    {
      id: 2,
      title: 'Combo Pareja',
      subtitle: 'Para momentos dulces',
      items: [
        '4 Paletas artesanales',
        '2 Bebidas frías',
        'Delivery gratis'
      ],
      originalPrice: 18000,
      price: 14500,
      savings: 3500,
      featured: false,
      placeholder: '💑',
      alt: 'Combo Pareja'
    },
    {
      id: 3,
      title: 'Combo Fiesta',
      subtitle: 'Para celebrar en grande',
      items: [
        '12 Paletas mixtas',
        '4 Helados premium',
        'Decoración especial'
      ],
      originalPrice: 55000,
      price: 42000,
      savings: 13000,
      featured: false,
      placeholder: '🎉',
      alt: 'Combo Fiesta'
    }
  ]

  return (
    <section className="combos">
      <h3>🎁 Combos Especiales</h3>
      <p className="combos-subtitle">¡Ahorra más con nuestras ofertas exclusivas!</p>
      
      <div className="combos-container">
        {combos.map((combo) => (
          <div 
            key={combo.id} 
            className={`combo-card ${combo.featured ? 'featured-combo' : ''}`}
          >
            {combo.featured && (
              <div className="combo-badge">¡MÁS VENDIDO!</div>
            )}
            
            <div className="combo-header">
              <div className="combo-image">
                <img 
                  src="" 
                  alt={combo.alt}
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextElementSibling.style.display = 'flex'
                  }}
                />
                <div className="combo-image-placeholder" style={{ display: 'none' }}>
                  <span className="combo-placeholder-icon">{combo.placeholder}</span>
                  <span>Combo</span>
                </div>
              </div>
              <div className="combo-text-info">
                <h4 className="combo-title">{combo.title}</h4>
                <p className="combo-subtitle">{combo.subtitle}</p>
              </div>
            </div>
            
            <div className="combo-content">
              <div className="combo-items">
                {combo.items.map((item, index) => (
                  <div key={index} className="combo-item">• {item}</div>
                ))}
              </div>
              <div className="combo-pricing">
                <span className="original-price">
                  ${combo.originalPrice.toLocaleString()}
                </span>
                <span className="combo-price">
                  ${combo.price.toLocaleString()}
                </span>
                <span className="savings">
                  Ahorras ${combo.savings.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CombosSection