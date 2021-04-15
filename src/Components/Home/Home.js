import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="title">
        <h1>Welcome To Fashion Factory</h1>
        <p>We'll help you catch up with today's fashion trends!</p>
      </div>
      <Link to="/shopping-cart/shop">
        <div className="shopping">Start Shopping!</div>
      </Link>
    </div>
  );
}

export default Home;
