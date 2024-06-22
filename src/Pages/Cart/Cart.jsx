import "./Cart.css";
import { createElement, useContext } from "react";
import Footer from "../../Components/Footer/Footer";
import { CartItemsContext } from "../../Context/Context";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartItemsContext);
  const [deliveryMessage, setDeliveryMessage] = useState("");
  const [showProduct, setShowProduct] = useState(true);
  const calculateTotalPrice = () => {
    let total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return total;
  };

  const buyIt = () => {
    setCartItems([]);
    setDeliveryMessage("Thanks for your order");
    setShowProduct(false);
  };

  const decrementCount = (item) => {
    if (item.quantity > 1) {
      const updatedItem = { ...item, quantity: item.quantity - 1 };
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id ? updatedItem : cartItem
      );
      setCartItems(updatedCartItems);
    }
  };

  const incrementCount = (item) => {
    const updatedItem = { ...item, quantity: item.quantity + 1 };
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === item.id ? updatedItem : cartItem
    );
    setCartItems(updatedCartItems);
  };

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  return (
    <section className="cart-container">
      <div className="profile-t-container">
        <h2 className="profile-title">YOUR CART</h2>
      </div>
      <div className="balken"></div>
      <div className="cart-wrapper">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {cartItems.map((item, index) => (
              <div className="cart-box" key={index}>
                <img src={`../${item.image}`} alt={item.name} />
                <div className="cart-order">
                  <p className="cart-itemname">{item.name}</p>
                  <p className="cart-quantity">Quantity: {item.quantity}</p>
                  <p className="cart-price">Price: ${(item.price * item.quantity).toFixed(2)}</p>
                  <div>
                    <div className="cart-setting">
                      <DeleteIcon onClick={() => removeFromCart(item.id)} />
                      <div className="cart-counter">
                        <button className="btn-minus" onClick={() => decrementCount(item)}>-</button>
                        <button className="btn-plus" onClick={() => incrementCount(item)}>+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className={cartItems.length !== 0 ? "cart-total" : "cart-hidden"}>
          <h3>Total Price: ${calculateTotalPrice().toFixed(2)}</h3>
          <button onClick={buyIt}>Buy Now</button>
        </div>
        <h2 id="delivery-message">{deliveryMessage}</h2>
        <img
          src="/img/emptycart.png"
          alt="Empty Cart"
          className={cartItems.length !== 0 ? "cart-img-hidden" : "cart-img"}
        />
      </div>
      <Footer />
    </section>
  );
};

export default Cart;
