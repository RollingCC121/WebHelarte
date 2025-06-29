import React from 'react'
import '../styles/featuredsection.css'

const FeaturedSection = () => {
  const featuredProduct = {
    name: 'Maracuyá Especial',
    description: 'Una combinación única de maracuyá colombiano con un toque de chile piquín',
    price: 3600,
    gradient: 'linear-gradient(45deg, #fd79a8, #fdcb6e)',
    placeholder: '🍊',
    alt: 'Maracuyá Especial'
  }

  return (
    <section className="featured">
      <h3>⭐ Sabor del Mes</h3>
      <div className="featured-product">
        <div className="featured-content">
          <div className="featured-image">
            <img 
              src="" 
              alt={featuredProduct.alt}
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextElementSibling.style.display = 'flex'
              }}
            />
            <div 
              className="featured-image-placeholder" 
              style={{ 
                display: 'none', 
                background: featuredProduct.gradient 
              }}
            >
              <span className="featured-placeholder-icon">{featuredProduct.placeholder}</span>
            </div>
          </div>
          
          <div className="featured-info">
            <div className="featured-header">
              <h4>{featuredProduct.name}</h4>
              <span className="featured-price">${featuredProduct.price.toLocaleString()}</span>
            </div>
            <p className="featured-description">{featuredProduct.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedSection