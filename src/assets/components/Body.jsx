import React, { useState } from "react";


const Body = ({ tprice }) => {
  const [quantity, setQuantity] = useState(1);
  console.log(tprice);
  tprice = parseFloat(tprice);
  

  const handleQuantityChange = (e) =>
  {
    const newQuantity = e.target.value;
    setQuantity(newQuantity);
  };

    return(
        <form>
          <label for="quantity">Quantity:</label>
          <input type="number" id="quantity" name="quantity" min="1" max="10" value={quantity} onChange={handleQuantityChange}></input>
          <p className="total-price">Total Price: ${(quantity*tprice)}</p>
          <button type="submit" >Add to Cart</button>
        </form>
    )
}
export default Body;