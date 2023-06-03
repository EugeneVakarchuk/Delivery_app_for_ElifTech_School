interface CartItem {
	id: string;
	title: string;
	price: number;
}

interface Cart {
	id: string;
	shopId: string;
	totalAmount: number;
	items: CartItem[];
}

export default Cart;
export {CartItem};
