import React, { useEffect, useState } from "react";
import ShopService from "../services/ShopService";
import ShopButton from "../ui/ShopButton";
import { useAppDispatch } from "../hooks/redux";
import CartService from "../services/CartService";

const ShopList: React.FC = () => {
  const [shops, setShops] = useState([]);
  const [shopListLoaded, setShopListLoaded] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getShopsList = async () => {
      try {
        const response = await ShopService.getShopList();
        if (response) {
          setShops(response);
          setShopListLoaded(true);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getShopsList();
  }, []);

  useEffect(() => {
    const createNewCart = async () => {
      try {
        const newCart = await CartService.createNewCart(shops[0]);
        return newCart;
      } catch (error) {
        console.log(error);
      }
    };

    const cart = localStorage.getItem("cart");
    if (!cart && shopListLoaded) {
      console.log(shops[0]);
      createNewCart().then((newCart) => {
        CartService.saveCartInStorage(newCart._id);
      });
    } else {
      console.log(cart);
      console.log(localStorage);
    }
  }, [shops, shopListLoaded]);

  return (
    <aside>
      <h2>Shops</h2>
      <div>
        {shops.map((shop, index) => (
          <ShopButton key={index} shopTitle={shop} />
        ))}
      </div>
    </aside>
  );
};

export default ShopList;
