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

	static async changeShopInCart(cartId: string, shopTitle: string) {
		try {
			const response = await $api.post(
				`/cart/changeShop/${cartId}/${shopTitle}`
			);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	}

	static async addGoodToCart(goodId: string, cartId: string) {
		try {
			const response = await $api.post(
				`/cart/addGood/${goodId}/${cartId}`
			);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	}

	static async getGoodsInCart(cartId: string) {
		try {
			const response = await $api.get(`/cart/getGoods/${cartId}`);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	}

	static async plusQuanityGoodInCart(cartId: string, goodId: string) {
		try {
			const response = await $api.post(
				`/cart/plusQuanity/${cartId}/${goodId}`
			);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	}

	static async minusQuanityGoodInCart(cartId: string, goodId: string) {
		try {
			const response = await $api.post(
				`/cart/minusQuanity/${cartId}/${goodId}`
			);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	}

	static async removeGoodInCart(cartId: string, goodId: string) {
		try {
			const response = await $api.post(
				`/cart/removeGoodInCart/${cartId}/${goodId}`
			);

			return response.data;
		} catch (error) {
			console.log(error);
		}
	}
}
