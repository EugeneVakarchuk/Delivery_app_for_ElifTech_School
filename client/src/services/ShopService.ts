import $api from "../http";

export default class ShopService {
	static async getShopList() {
		const response = await $api.get("/getshops");
		return response.data;
	}

	static async getShopById(shopId: string) {
		const response = await $api.get(`/shop/id/${shopId}`);
		return response.data;
	}

	static async getShopByTitle(shopTitle: string) {
		const response = await $api.get(`/shop/title/${shopTitle}`);
		return response.data._id;
	}
}
