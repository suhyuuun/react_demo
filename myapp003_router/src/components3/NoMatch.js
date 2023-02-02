import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to Home page</Link>
      </p>
    </div>
  );
};

export default NoMatch;
