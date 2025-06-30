// Datos de productos
export const productsData = [
  {
    id: 1,
    name: 'Fresa Crema',
    description: 'Cremosa paleta de fresa con leche condensada',
    price: 3500,
    category: 'leche',
    rating: 4.8,
    gradient: 'linear-gradient(45deg, #ff9ff3, #f368e0)',
    badge: { type: 'new', text: 'Nuevo' },
    ingredients: ['Fresa natural', 'Leche condensada', 'Crema de leche']
  },
  {
    id: 2,
    name: 'Limón Natural',
    description: 'Refrescante paleta de agua con limón real',
    price: 2800,
    category: 'agua',
    rating: 4.9,
    gradient: 'linear-gradient(45deg, #74b9ff, #0984e3)',
    badge: { type: 'popular', text: 'Popular' },
    ingredients: ['Agua purificada', 'Limón natural', 'Azúcar orgánica']
  },
  {
    id: 3,
    name: 'Chocolate Intenso',
    description: 'Rico chocolate artesanal con leche',
    price: 3200,
    category: 'leche',
    rating: 4.7,
    gradient: 'linear-gradient(45deg, #6c5ce7, #a29bfe)',
    ingredients: ['Chocolate belga', 'Leche fresca', 'Cacao en polvo']
  },
  {
    id: 4,
    name: 'Té Verde Mango',
    description: 'Té verde artesanal con trozos de mango',
    price: 3800,
    category: 'te',
    rating: 4.6,
    gradient: 'linear-gradient(45deg, #00b894, #00cec9)',
    badge: { type: 'vegan', text: 'Vegano' },
    ingredients: ['Té verde orgánico', 'Mango natural', 'Agua de coco']
  },
  {
    id: 5,
    name: 'Coco Tropical',
    description: 'Paleta de agua de coco con pulpa natural',
    price: 3000,
    category: 'agua',
    rating: 4.5,
    gradient: 'linear-gradient(45deg, #fdcb6e, #e17055)',
    badge: { type: 'vegan', text: 'Vegano' },
    ingredients: ['Agua de coco fresca', 'Pulpa de coco', 'Azúcar de coco']
  },
  {
    id: 6,
    name: 'Vainilla Premium',
    description: 'Suave paleta de vainilla con leche fresca',
    price: 3300,
    category: 'leche',
    rating: 4.8,
    gradient: 'linear-gradient(45deg, #fab1a0, #e17055)',
    ingredients: ['Vainilla Madagascar', 'Leche fresca', 'Crema batida']
  },
  {
    id: 7,
    name: 'Maracuyá Picante',
    description: 'Maracuyá colombiano con chile piquín',
    price: 3600,
    category: 'agua',
    rating: 4.4,
    gradient: 'linear-gradient(45deg, #fd79a8, #fdcb6e)',
    badge: { type: 'special', text: 'Especial' },
    ingredients: ['Maracuyá colombiano', 'Chile piquín', 'Sal marina']
  },
  {
    id: 8,
    name: 'Matcha Cremoso',
    description: 'Té matcha japonés con leche de almendras',
    price: 4200,
    category: 'temporada',
    rating: 4.7,
    gradient: 'linear-gradient(45deg, #55a3ff, #74b9ff)',
    badge: { type: 'premium', text: 'Premium' },
    ingredients: ['Matcha japonés', 'Leche de almendras', 'Miel de abeja']
  }
]

// Datos de categorías - ¡ESTE ERA EL EXPORT FALTANTE!
export const categories = [
  { id: 'all', name: 'Todos', icon: '🍦' },
  { id: 'agua', name: 'Agua', icon: '💧' },
  { id: 'leche', name: 'Leche', icon: '🥛' },
  { id: 'temporada', name: 'Temporada', icon: '☀️' }
]

// Funciones utilitarias (opcional)
export const getProductsByCategory = (category) => {
  if (category === 'all') return productsData
  return productsData.filter(product => product.category === category)
}

export const getProductById = (id) => {
  return productsData.find(product => product.id === id)
}

export const getFeaturedProducts = () => {
  return productsData.filter(product => product.badge?.type === 'popular' || product.badge?.type === 'special')
}

export const getProductsByPriceRange = (minPrice, maxPrice) => {
  return productsData.filter(product => product.price >= minPrice && product.price <= maxPrice)
}

export const searchProducts = (searchTerm) => {
  const term = searchTerm.toLowerCase()
  return productsData.filter(product => 
    product.name.toLowerCase().includes(term) ||
    product.description.toLowerCase().includes(term) ||
    product.ingredients.some(ingredient => ingredient.toLowerCase().includes(term))
  )
}