import { useParams } from "react-router-dom";

const UserPage = () => {
  const params = useParams();
  return <div>User Info ID {params.id}</div>;
};

export default UserPage;
