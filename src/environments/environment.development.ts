export const environment = {
  production: false,
  apiUrl: 'http://localhost:4200',

  storeApi: {
    getStores: '/api/store',
    getStore: '/api/store/{idStore}'
  },

  productApi: {
    getProducts: '/api/stores/{idStore}/products',
    postProduct: '/api/stores/{idStore}/products',
    getProduct: '/api/stores/{idStore}/products/{idProduct}',
    deleteProduct: '/api/stores/{idStore}/products/{idProduct}',
  },

  statsApi: {
    getStats: '/api/stores/{idStore}/stats/categories'
  }
};
