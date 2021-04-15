import "./Cart.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import uniqid from "uniqid";

function ShoppingCart(props) {
  const [checkout, setCheckout] = useState(false);
  const [total, setTotal] = useState(0);

  function remove(item) {
    const index = props.cart.indexOf(item);
    const list = Object.assign([], props.cart);
    list.splice(index, 1);
    props.setCart(list);
  }

  function clearCart() {
    props.setCart([]);
  }

  function displayModal() {
    setCheckout(true);
  }

  useEffect(() => {
    setTotal(() =>
      props.cart
        .map((item) => item.price)
        .reduce((acc, price) => acc + price, 0)
        .toFixed(2)
    );
  }, [props.cart]);

  if (props.cart.length) {
    return (
      <div className="cart">
        <h1>Shopping Cart</h1>
        {props.cart.map((item) => {
          return (
            <div className="cart__item" key={uniqid()}>
              <img className="image" src={item.image} alt="product" />
              <div className="info">
                <label>{item.title}</label>
                <label>${item.price}</label>
                <button className="btn" onClick={remove.bind(null, item)}>
                  Remove
                </button>
              </div>
            </div>
          );
        })}
        <p>
          Total <span>{props.cart.length}</span> Items:
          <span> ${total}</span>
        </p>
        <div className="options">
          <button className="btn" onClick={clearCart}>
            Clear Cart
          </button>
          <button className="btn" onClick={displayModal}>
            Checkout
          </button>
        </div>
        <div className={checkout ? "modal" : "modal hidden"}>
          <h2>Thanks for shopping!</h2>
          <p>Item purchased successfully.</p>
          <Link to="/shop">
            <button className="btn" onClick={clearCart}>
              Go Back Shopping
            </button>
          </Link>
        </div>
        <div className={checkout ? "overlay" : "overlay hidden"}></div>
      </div>
    );
  } else {
    return (
      <div className="empty">
        <p>Your Shopping Cart is empty, lets add some items to it!</p>
        <Link to="/shop">
          <button className="btn">Shop</button>
        </Link>
      </div>
    );
  }
}

export default ShoppingCart;
