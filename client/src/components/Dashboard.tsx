import { useNavigate } from "react-router-dom";

import { User } from "../redux/userSlice";
import { useEffect } from "react";

interface props {
  user: User | null;
}

const Dashboard: React.FC<props> = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?._id) navigate("/login");
  }, []);

  return <div>Dashboard</div>;
};

export default Dashboard;
