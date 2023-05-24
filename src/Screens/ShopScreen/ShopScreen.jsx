import React, { useContext } from "react";
import Navigation from "../../Templates/Navigation/Navigation";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";
import CategoryTab from "../../Templates/CategoryTab/CategoryTab";
import ProductsHomePage from "../../Templates/ProductsHomePage/ProductsHomePage";
import banner from "../../assets/images/shop/advertisement.jpg";

const ShopScreen = () => {
  const { items } = useContext(CartContext);
  const { user } = useContext(UserContext);

  console.log(items);

  return (
    <>
      <Navigation />
      <img src={banner} alt="" />
      <ProductsHomePage />

      <div>{user.toString()}</div>
    </>
  );
};

export default ShopScreen;
