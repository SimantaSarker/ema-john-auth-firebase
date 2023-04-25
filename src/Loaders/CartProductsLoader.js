import { useState } from "react";
import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader= async ()=>{
const loadedProducts=await fetch('products.json');
const products=await loadedProducts.json();
const storedCart=getShoppingCart();
const savedCart=[];
for(const id in storedCart)
{
  const addedProduct=products.find((pd)=>pd.id===id);

  if(addedProduct)
  {
    const quantity=storedCart[id];
    addedProduct.quantity=quantity;
    savedCart.push(addedProduct);
  }
 
}
//-----If i want to return two things in javascript i have to follow like below----
// option 1:--return [products,savedCart]; then destructring where i received the array-----
//option 2:----{products,savedCart}..


return savedCart;
}
export default cartProductsLoader;