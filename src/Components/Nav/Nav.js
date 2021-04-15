import "./Nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__links">
        <li className="logo">Fashion Factory</li>
        <li className="menu">
          <NavLink exact to="/shopping-cart/" activeClassName="active">
            <p>Home</p>
          </NavLink>
          <NavLink exact to="/shopping-cart/shop" activeClassName="active">
            <p>Shop</p>
          </NavLink>
          <NavLink exact to="/shopping-cart/cart" activeClassName="active">
            <p>
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              &nbsp;Cart
            </p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
