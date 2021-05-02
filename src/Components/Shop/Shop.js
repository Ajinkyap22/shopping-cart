import "./Shop.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Shop(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(props.allItems);
  }, [props.allItems]);

  function addToCart(item, e) {
    if (props.cart.includes(item)) {
      props.setCart(props.cart.filter((prod) => prod.id !== item.id));
    } else {
      const quantity = +e.target.previousSibling.firstElementChild.value;
      for (let i = 1; i <= quantity; i++)
        props.setCart((cart) => [...cart, item]);
    }
  }

  function filter(e) {
    if (e.target.value === "all") {
      setItems(props.allItems);
    } else {
      const filtered = [...props.allItems].filter(
        (item) => item.category === e.target.value
      );

      console.log(props.allItems);

      setItems(filtered);
    }
  }

  function imagesLoaded() {
    const images = [...document.querySelectorAll(".image")];

    return images.every((img) => img.complete);
  }

  function handleLoading() {
    props.setLoaded(imagesLoaded());
  }

  return (
    <div>
      <div className="header">
        <h1>Shop</h1>
        <select className="categories" onChange={filter}>
          <option value="all">All</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="jewelery">Jewelery</option>
        </select>
      </div>

      <Link to="/shopping-cart/cart">
        <button className="sticky">
          <i className="fa fa-shopping-cart" aria-hidden="true">
            &nbsp;{props.cart.length}
          </i>
        </button>
      </Link>
      <div className="shop">
        {items.map((item) => {
          return (
            <div key={item.id} className="product">
              <img
                className="image"
                src={item.image}
                alt="prdouct"
                onLoad={handleLoading}
                onError={handleLoading}
              />
              <label className="title">{item.title}</label>
              <label className="price">${item.price}</label>
              <label className={props.cart.includes(item) ? "hidden" : ""}>
                Quantity: &nbsp;
                <input type="number" min="1" defaultValue="1" />
              </label>
              <button className="btn" onClick={addToCart.bind(null, item)}>
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;
                {props.cart.includes(item)
                  ? " Remove from Cart"
                  : " Add to Cart"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Shop;
