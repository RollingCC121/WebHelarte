import React from 'react'
import '../styles/productcard.css'

const ProductCard = ({ product }) => {
  const getBadgeClass = (badgeType) => {
    switch (badgeType) {
      case 'new': return 'badge-new'
      case 'popular': return 'badge-popular'
      case 'vegan': return 'badge-vegan'
      case 'special': return 'badge-special'
      case 'premium': return 'badge-premium'
      default: return 'badge-default'
    }
  }

  return (
    <div className="product-card">
      <div 
        className="product-image" 
        style={{ background: product.gradient }}
      >
        {/* Se eliminó el botón de favorito */}
        {product.badge && (
          <span className={`badge ${getBadgeClass(product.badge.type)}`}>
            {product.badge.text}
          </span>
        )}
      </div>
      
      <div className="product-info">
        <h4 className="product-name">{product.name}</h4>
        <p className="product-description">{product.description}</p>
        {/* Se eliminaron las estrellas y el rating */}
        <div className="product-footer">
          <span className="product-price">${product.price.toLocaleString()}</span>
          {/* Se eliminó el botón de agregar al carrito */}
        </div>
      </div>
    </div>
  )
}

export default ProductCard