import $api from "../http";

export default class GoodService {
	static async getGoodsByShop(shopId: string) {
		if (shopId === null) {
			return;
		} else {
			const response = await $api.get(`/goods/${shopId}`);
			return response.data;
		}
	}
}
