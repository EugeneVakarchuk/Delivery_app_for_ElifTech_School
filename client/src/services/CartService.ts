import $api from "../http";

export default class CartService {
	static async createNewCart(shopTitle: string) {
		try {
			const response = await $api.post("/cart/newCart", {shopTitle});
			return response.data;
		} catch (error) {
			console.log(error);
			throw new Error("Failed to create cart");
		}
	}
	static async saveCartInStorage(cartId: string) {
		try {
			localStorage.setItem("cartId", cartId);
		} catch (error) {
			console.log(error);
		}
	}

	static async getShopByCartId(cartId: string) {
		try {
			const response = await $api.get(`/cart/getShop/${cartId}`);
			return response.data.shopId;
		} catch (error) {
			console.log(error);
		}
	}

	static async changeCartShop(cartId: string, shopTitle: string) {
		try {
			const response = await $api.post(
				`/cart/changeShop/${cartId}/${shopTitle}`
			);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	}
}
