import { apiMethods, baseUrl, getHeaderKey, queryParams } from '../api';

import { Suggest, ShopInfoResponse, ProductResponse, ServerResponse, CouponsResponse, SalesResponse, LinkResponse } from '../models';

export const EasyDonateService = {
  async getShopInfo(shopKey: string): Promise<Suggest<ShopInfoResponse>> {
    return fetch(`${baseUrl}${apiMethods.shop}`, {
      headers: getHeaderKey(shopKey),
    }).then((response) => response.json());
  },

  async getAllProducts(shopKey: string): Promise<Suggest<ProductResponse[]>> {
    return fetch(`${baseUrl}${apiMethods.shopProducts}`, {
      headers: getHeaderKey(shopKey),
    }).then((response) => response.json());
  },

  async getProductsById(productID: string | number, shopKey: string): Promise<Suggest<ProductResponse>> {
    return fetch(`${baseUrl}${apiMethods.product(String(productID))}`, {
      headers: getHeaderKey(shopKey),
    }).then((response) => response.json());
  },

  async getAllServers(shopKey: string): Promise<Suggest<ServerResponse[]>> {
    return fetch(`${baseUrl}${apiMethods.shopServers}`, {
      headers: getHeaderKey(shopKey),
    }).then((response) => response.json());
  },

  async getServerById(serverID: string | number, shopKey: string): Promise<Suggest<ServerResponse>> {
    return fetch(`${baseUrl}${apiMethods.server(String(serverID))}`, {
      headers: getHeaderKey(shopKey),
    }).then((response) => response.json());
  },

  async getAllSales(query: boolean = true, shopKey: string): Promise<Suggest<SalesResponse[]>> {
    return fetch(`${baseUrl}${apiMethods.massSales}?${queryParams.whereActive}=${query}`, {
      headers: getHeaderKey(shopKey),
    }).then((response) => response.json());
  },

  async getAllCoupons(query: boolean = true, shopKey: string): Promise<Suggest<CouponsResponse[]>> {
    return fetch(`${baseUrl}${apiMethods.coupons}?${queryParams.whereActive}=${query}`, {
      headers: getHeaderKey(shopKey),
    }).then((response) => response.json());
  },

  async getAllPayments(shopKey: string): Promise<Suggest<any>> {
    return fetch(`${baseUrl}${apiMethods.shopProducts}`, {
      headers: getHeaderKey(shopKey),
    }).then((response) => response.json());
  },

  async getAllPaymentById(paymentID: string | number, shopKey: string): Promise<Suggest<ServerResponse>> {
    return fetch(`${baseUrl}${apiMethods.shopPayments}`, {
      headers: getHeaderKey(shopKey),
    }).then((response) => response.json());
  },

  async getPaymentLink(
    customer: string,
    serverID: string | number,
    products: {
      [key: number]: number;
    },
    url: string = '',
    email: string = '',
    coupon: string = '',
    shopKey: string,
  ): Promise<Suggest<LinkResponse>> {
    const params = new URLSearchParams({
      [queryParams.customer]: customer,
      [queryParams.serverId]: String(serverID),
      [queryParams.products]: JSON.stringify(products),
      [queryParams.url]: url,
      [queryParams.email]: email,
      [queryParams.coupon]: coupon,
    });

    return fetch(`${baseUrl}${apiMethods.shopPaymentCreate}?${params.toString()}`, {
      headers: getHeaderKey(shopKey),
    }).then((response) => response.json());
  },
};
