import React, { useState } from 'react'
import { ShoppingCart, X } from 'lucide-react'
import { useCart } from './cartcontext'
import '../styles/floatingcart.css'

const FloatingCart = () => {
  const { getTotalItems, getTotalPrice, cartItems } = useCart()
  const [showCartModal, setShowCartModal] = useState(false)
  
  const totalItems = getTotalItems()
  const totalPrice = getTotalPrice()

  const handleOpenCart = () => {
    if (totalItems > 0) {
      setShowCartModal(true)
    } else {
      alert('Tu carrito está vacío')
    }
  }

  const handleCloseCart = () => {
    setShowCartModal(false)
  }

  const handleCheckout = () => {
    alert(`Proceder al checkout\nTotal: $${totalPrice.toLocaleString()}\nItems: ${totalItems}`)
    setShowCartModal(false)
  }

  return (
    <>
      <button 
        className={`floating-cart ${totalItems > 0 ? 'has-items' : ''}`}
        onClick={handleOpenCart}
        aria-label={`Carrito de compras - ${totalItems} items`}
      >
        <ShoppingCart size={24} />
        {totalItems > 0 && (
          <span className="cart-count">{totalItems}</span>
        )}
      </button>

      {/* Modal del carrito */}
      {showCartModal && (
        <div className="cart-modal-overlay" onClick={handleCloseCart}>
          <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
            <div className="cart-header">
              <h3>Tu Carrito</h3>
              <button className="close-btn" onClick={handleCloseCart}>
                <X size={20} />
              </button>
            </div>
            
            <div className="cart-content">
              {cartItems.length === 0 ? (
                <p className="empty-cart">Tu carrito está vacío</p>
              ) : (
                <>
                  <div className="cart-items">
                    {cartItems.map(item => (
                      <div key={item.id} className="cart-item">
                        <div 
                          className="cart-item-image"
                          style={{ background: item.gradient }}
                        ></div>
                        <div className="cart-item-info">
                          <h4>{item.name}</h4>
                          <p>Cantidad: {item.quantity}</p>
                          <span className="item-price">
                            ${(item.price * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="cart-summary">
                    <div className="total-line">
                      <span>Total: </span>
                      <span className="total-price">${totalPrice.toLocaleString()}</span>
                    </div>
                    <button className="checkout-btn" onClick={handleCheckout}>
                      Proceder al Pago
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default FloatingCart