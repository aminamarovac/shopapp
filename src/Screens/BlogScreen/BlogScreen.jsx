import React, { useContext } from "react";
import Navigation from "../../Templates/Navigation/Navigation";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";
import ProductsHomePage from "../../Templates/ProductsHomePage/ProductsHomePage";
import DropdownDiv from "../../Templates/DropdownDiv/DropdownDiv";

const BlogScreen = () => {
  const { items } = useContext(CartContext);
  const { user } = useContext(UserContext);

  console.log(items);

  return (
    <>
  <Navigation />
  <DropdownDiv/>
    <ProductsHomePage />

   </>
 );
};
export default BlogScreen;
