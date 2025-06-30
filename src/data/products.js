// Datos de productos
export const productsData = [
  {
    id: 1,
    name: 'Mango Biche',
    description: 'Paleta en agua de mango biche, refrescante y ácida.',
    price: 4000,
    category: 'agua',
    gradient: 'linear-gradient(45deg, #ffe259, #ffa751)',
    badge: { type: 'special', text: 'Popular' },
    ingredients: ['Mango biche', 'Agua', 'Azúcar'],
  },
  {
    id: 2,
    name: 'MaracuMango',
    description: 'Paleta en leche de maracuyá y mango, cremosa y tropical.',
    price: 4000,
    category: 'agua',
    gradient: 'linear-gradient(45deg, #f6d365, #fda085)',
    badge: { type: 'new', text: 'Nuevo' },
    ingredients: ['Maracuyá', 'Mango', 'Leche', 'Azúcar'],
  },
  {
    id: 3,
    name: 'Tentación de Mora',
    description: 'Paleta en agua de mora, dulce y natural.',
    price: 4000,
    category: 'agua',
    gradient: 'linear-gradient(45deg, #a18cd1, #fbc2eb)',
    badge: { type: 'special', text: 'Especial' },
    ingredients: ['Mora', 'Agua', 'Azúcar'],
  },
  {
    id: 4,
    name: 'Maní con Arequipe',
    description: 'Paleta en leche con maní crocante y arequipe.',
    price: 4500,
    category: 'leche',
    gradient: 'linear-gradient(45deg, #f7971e, #ffd200)',
    badge: { type: 'premium', text: 'Premium' },
    ingredients: ['Maní', 'Arequipe', 'Leche', 'Azúcar'],
  },
  {
    id: 5,
    name: 'Coco',
    description: 'Paleta en leche de coco, cremosa y tropical.',
    price: 4500,
    category: 'leche',
    gradient: 'linear-gradient(45deg, #fffcdc, #d9a7c7)',
    badge: { type: 'vegan', text: 'Vegano' },
    ingredients: ['Coco', 'Leche', 'Azúcar'],
  },
  {
    id: 6,
    name: 'ChocoBanano',
    description: 'Paleta en leche de banano cubierta de chocolate.',
    price: 4500,
    category: 'especial',
    gradient: 'linear-gradient(45deg, #e0c3fc, #8ec5fc)',
    badge: { type: 'especial', text: 'Especial' },
    ingredients: ['Banano', 'Chocolate', 'Leche', 'Azúcar'],
  },
  {
    id: 7,
    name: 'QuesoBocadillo',
    description: 'Paleta en leche de queso con trozos de bocadillo.',
    price: 4500,
    category: 'leche',
    gradient: 'linear-gradient(45deg, #fceabb, #f8b500)',
    badge: { type: 'especial', text: 'Especial' },
    ingredients: ['Queso', 'Bocadillo', 'Leche', 'Azúcar'],
  },
  {
    id: 8,
    name: 'Tres Leches',
    description: 'Paleta en leche inspirada en el postre tres leches.',
    price: 4500,
    category: 'leche',
    gradient: 'linear-gradient(45deg, #f9d423, #ff4e50)',
    badge: { type: 'premium', text: 'Premium' },
    ingredients: ['Leche condensada', 'Leche evaporada', 'Leche', 'Azúcar'],
  },
  {
    id: 9,
    name: 'ChocoProteína',
    description: 'Paleta fit de chocolate con proteína.',
    price: 5500,
    category: 'especial',
    gradient: 'linear-gradient(45deg, #434343, #000000)',
    badge: { type: 'especial', text: 'Especial' },
    ingredients: ['Chocolate', 'Proteína', 'Leche', 'Endulzante'],
  },
  {
    id: 10,
    name: 'FrutosRojos',
    description: 'Paleta fit de frutos rojos, saludable y deliciosa.',
    price: 5500,
    category: 'especial',
    gradient: 'linear-gradient(45deg, #ffaf7b, #d76d77)',
    badge: { type: 'especial', text: 'Especial' },
    ingredients: ['Frutos rojos', 'Proteína', 'Leche', 'Endulzante'],
  },
  {
    id: 11,
    name: 'MasmelosKlim',
    description: 'Paleta especial de leche Klim con masmelos.',
    price: 5000,
    category: 'especial',
    gradient: 'linear-gradient(45deg, #f7971e, #ffd200)',
    badge: { type: 'especial', text: 'Especial' },
    ingredients: ['Leche Klim', 'Masmelos', 'Azúcar'],
  }
]

// Datos de categorías
export const categories = [
  { id: 'all', name: 'Todos', icon: '🍦' },
  { id: 'agua', name: 'Agua', icon: '💧' },
  { id: 'leche', name: 'Leche', icon: '🥛' },
  { id: 'especial', name: 'Especial', icon: '🌟' }
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