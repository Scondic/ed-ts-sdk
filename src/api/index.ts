export const baseUrl = 'https://easydonate.ru';

export const apiVersion = '/api/v3';

export const apiMethods = {
  shop: `${apiVersion}/shop`,
  shopServer: `${apiVersion}/shop/server`,
  shopServers: `${apiVersion}/shop/servers`,
  shopProducts: `${apiVersion}/shop/products`,
  shopPayments: `${apiVersion}/shop/payments`,
  shopPaymentCreate: `${apiVersion}/shop/payment/create`,
  massSales: `${apiVersion}/shop/massSales`,
  coupons: `${apiVersion}/shop/coupons`,
  product: (productID: string) => {
    return `${apiMethods.shopProducts}/${productID}`;
  },
  server: (serverID: string) => {
    return `${apiMethods.shopServer}/${serverID}`;
  },
};

export const queryParams = {
  whereActive: 'where-active',
  customer: 'customer',
  serverId: 'server_id',
  products: 'products',
  url: 'success_url',
  email: 'email',
  coupon: 'coupon',
};

export const getHeaderKey = (token: string) => ({
  'Shop-Key': token,
});
