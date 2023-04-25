import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCardAlt } from '@fortawesome/free-solid-svg-icons'
const Orders = () => {
  const savedCart = useLoaderData();
  const [cart, SetCart] = useState(savedCart);

  const handleRemoveFromCart = (id) => {
    // removeFromDb(id)
    const remaining=cart.filter((product)=>product.id!==id);
    SetCart(remaining);
    removeFromDb(id)
  };
  const handleClearCart=()=>{
    SetCart([]);
    deleteShoppingCart();
  }

  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((product) => (
          <ReviewItem
            product={product}
            key={product.id}
            handleRemoveFromCart={handleRemoveFromCart}
            handleClearCart={handleClearCart} ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link className="proceed-link" to="/checkout"><div className="btn-proceed">Proceed Checkout</div> <FontAwesomeIcon className="delete-icon" icon={faCreditCardAlt} /> </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
