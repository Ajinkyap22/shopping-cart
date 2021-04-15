import "./Loader.css";
import loaderImage from "../../images/Logo.png";

const Loader = () => {
  return (
    <div className="loader">
      <img src={loaderImage} alt="Loading spinner" />
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
