import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h2>Product</h2>
      <ul>
        <li>
          <Link to="/product/1">1번상품</Link>
        </li>
        <li>
          <Link to="/product/2">2번상품</Link>
        </li>
      </ul>
    </div>
  );
};

export default Main;
