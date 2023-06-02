import $api from "../http";
import { IShop } from "../models/IShop";

export default class ShopService {
  static async getShopList() {
    const respose = await $api.get("/getshops");
    return respose.data;
  }
}
