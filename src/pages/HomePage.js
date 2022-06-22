import { Link } from "react-router-dom";

const HomePage = () => {
  const userID = "10";
  return (
    <div>
      <h1>SPA</h1>
      <Link to={`/user/${userID}`}>Usuario</Link>
    </div>
  );
};

export default HomePage;
