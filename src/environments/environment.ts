export const environment = {
  production: true,
  apiUrl: 'http://us-central1-test-b7665.cloudfunctions.net/api/',

  storeApi: {
    getStores: '/stores',
    getStore: '/stores/{idStore}'
  },

  productApi: {
    getProducts: '/stores/{idStore}/products',
    postProduct: '/stores/{idStore}/products',
    getProduct: '/stores/{idStore}/products/{idProduct}',
    deleteProduct: '/stores/{idStore}/products/{idProduct}',
  },

  statsApi: {
    getStats: '/stores/{idStore}/stats/categories'
  }
};
