import React, { useState } from 'react'
import { Heart, Plus } from 'lucide-react'
import { useCart } from './cartcontext.jsx'
import '../styles/productcard.css'

const ProductCard = ({ product }) => {
  const { addToCart, toggleFavorite, favorites } = useCart()
  const [isAdding, setIsAdding] = useState(false)
  
  const isFavorite = favorites.includes(product.id)

  const handleAddToCart = () => {
    setIsAdding(true)
    addToCart(product)
    
    setTimeout(() => {
      setIsAdding(false)
    }, 600)
  }

  const handleToggleFavorite = () => {
    toggleFavorite(product.id)
  }

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
        <button 
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={handleToggleFavorite}
          aria-label={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        >
          <Heart size={16} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
        {product.badge && (
          <span className={`badge ${getBadgeClass(product.badge.type)}`}>
            {product.badge.text}
          </span>
        )}
      </div>
      
      <div className="product-info">
        <h4 className="product-name">{product.name}</h4>
        <p className="product-description">{product.description}</p>
        
        <div className="product-rating">
          <span className="stars">
            {'⭐'.repeat(Math.floor(product.rating))}
          </span>
          <span className="rating-text">({product.rating})</span>
        </div>
        
        <div className="product-footer">
          <span className="product-price">${product.price.toLocaleString()}</span>
          <button 
            className={`add-to-cart ${isAdding ? 'adding' : ''}`}
            onClick={handleAddToCart}
            disabled={isAdding}
            aria-label="Agregar al carrito"
          >
            {isAdding ? <Check size={16} /> : <Plus size={16} />}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard