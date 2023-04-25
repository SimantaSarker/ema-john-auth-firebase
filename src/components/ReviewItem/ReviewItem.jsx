import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft,faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const ReviewItem = ({ product,handleRemoveFromCart }) => {
  const { category, img, name, price, shipping,id } = product;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt=""/>
      </div>
      <div className="item-details">
        <div>
          <p className="product-title">{name}</p>
          <p>
            Price : <span className="orange-text">{price}$</span>
          </p>
          <p>
            Shipping Charge: <span className="shipping-charge">{shipping}$</span>
          </p>
        </div>
        <button className="btn-delete" onClick={()=>handleRemoveFromCart(id)}> <FontAwesomeIcon className="delete-icon" icon={faTrashAlt} /></button>
      </div>
    </div>
  );
};

export default ReviewItem;
