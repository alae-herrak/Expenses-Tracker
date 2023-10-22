import { useNavigate } from "react-router-dom";

import { User } from "../redux/userSlice";

interface props {
  user: User | null;
}

const Dashboard: React.FC<props> = ({user}) => {
  const navigate = useNavigate();

  if (!user?._id) navigate("/login");

  return (
    <div>
      Dashboard
    </div>
  );
};

export default Dashboard;
