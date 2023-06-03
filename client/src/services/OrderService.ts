import $api from "../http";

export default class OrderService {
	static async createNewOrder(
		name: string,
		adress: string,
		tel: string,
		email: string,
		cartId: string
	) {
		const response = await $api.post(`/orgers/createOrder/${cartId}`, {
			name,
			adress,
			tel,
			email,
		});

		return response.data;
	}
}
