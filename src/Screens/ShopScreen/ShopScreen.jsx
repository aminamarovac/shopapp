import React, { useContext } from "react";
import Navigation from "../../Templates/Navigation/Navigation";
import Footer from "../../Templates/Footer/Footer";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";
import CounterComponent from "../../Templates/CounterComponent/CounterComponent";

const ShopScreen = () => {
  const { items } = useContext(CartContext);
  const { user } = useContext(UserContext);

  console.log(items);

  return (
    <>
      <Navigation />
      <div>{user.toString()}</div>
      <CounterComponent />
      <Footer />
    </>
  );
};
export default ShopScreen;
