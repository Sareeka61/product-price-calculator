import React, { useState } from "react";


const Body = ({ price }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) =>
  {
    const newQuantity = e.target.value;
    setQuantity(newQuantity);
  };

    return(
        <form>
          <label for="quantity">Quantity:</label>
          <input type="number" id="quantity" name="quantity" min="1" max="10" value={quantity} onChange={handleQuantityChange}></input>
          <p className="total-price">Total Price: ${(quantity*price)}</p>
          <button type="submit" >Add to Cart</button>
        </form>
    )
}
export default Body;