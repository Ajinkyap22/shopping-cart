import "./App.css";
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import Cart from "./Components/Cart/Cart";
import Nav from "./Components/Nav/Nav";
import Loader from "./Components/Loader/Loader";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const [allItems, setAllItems] = useState([]);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function fetchItems() {
      const data = await fetch("https://fakestoreapi.com/products");

      const products = await data.json();

      const items = products.filter((item) => item.category !== "electronics");

      setAllItems(items);
    }

    fetchItems();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/shopping-cart/" component={Home} />
          <Route
            path="/shopping-cart/shop"
            render={() => (
              <div>
                <div className={loaded ? "hidden" : ""}>
                  <Loader />
                </div>
                <div className={loaded ? "" : "hidden"}>
                  <Shop
                    allItems={allItems}
                    cart={cart}
                    setCart={setCart}
                    setLoaded={setLoaded}
                  />
                </div>
              </div>
            )}
          />
          <Route
            path="/shopping-cart/cart"
            render={() => <Cart cart={cart} setCart={setCart} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
