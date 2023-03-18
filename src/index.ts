import { EasyDonateService } from './services';

export class EasyDonateApiClient {
  constructor(private shopKey: string) {}

  async getShopInfo() {
    return await EasyDonateService.getShopInfo(this.shopKey);
  }

  async getAllProducts() {
    return await EasyDonateService.getAllProducts(this.shopKey);
  }

  async getProductsById(productID: string | number) {
    return await EasyDonateService.getProductsById(productID, this.shopKey);
  }

  async getAllServers() {
    return await EasyDonateService.getAllServers(this.shopKey);
  }

  async getServerById(serverID: string | number) {
    return await EasyDonateService.getServerById(serverID, this.shopKey);
  }

  async getAllSales(query: boolean = true) {
    return await EasyDonateService.getAllSales(query, this.shopKey);
  }

  async getAllCoupons(query: boolean = true) {
    return await EasyDonateService.getAllCoupons(query, this.shopKey);
  }

  async getAllPayments() {
    return await EasyDonateService.getAllPayments(this.shopKey);
  }

  async getAllPaymentById(paymentID: string | number) {
    return await EasyDonateService.getAllPaymentById(paymentID, this.shopKey);
  }

  async getPaymentLink(
    customer: string,
    serverID: string | number,
    products: {
      [key: number]: number;
    },
    url: string = '',
    email: string = '',
    coupon: string = '',
  ) {
    return await EasyDonateService.getPaymentLink(customer, serverID, products, url, email, coupon, this.shopKey);
  }
}
