import React, { useState } from 'react'
import ProductCard from './productcard'
import { productsData, categories } from '../data/products'
import '../styles/productcategories.css'

const ProductCategories = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProducts = activeCategory === 'all' 
    ? productsData 
    : productsData.filter(product => product.category === activeCategory)

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId)
  }

  return (
    <section className="categories">
      <h3>Nuestros Sabores</h3>
      
      <div className="category-tabs">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => handleCategoryChange(category.id)}
          >
            {category.icon} {category.name}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default ProductCategories