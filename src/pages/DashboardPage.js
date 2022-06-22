import { Link, Outlet, useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/", { replace: true });
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="welcome">Ver</Link>
      <br />
      <button onClick={handleClick}>Salir</button>
      <br />
      {/** 
      <Routes>
        <Route path="welcome" element={<p>Welcome</p>}></Route>
      </Routes>
      */}
      <Outlet />
    </div>
  );
};

export default DashboardPage;
