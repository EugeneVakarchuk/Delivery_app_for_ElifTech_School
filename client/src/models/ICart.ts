interface CartItem {
  id: string;
  name: string;
  price: number;
}

interface Cart {
  id: string;
  shopId: string;
  totalAmount: number;
  items: CartItem[];
}

export default Cart;
