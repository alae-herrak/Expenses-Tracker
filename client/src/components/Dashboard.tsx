import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RootState } from "../store";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.user.user);
  if (!user) navigate("/login");

  return (
    <div>
      Dashboard
    </div>
  );
};

export default Dashboard;
