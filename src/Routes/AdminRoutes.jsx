import React,{ useContext } from "react";
import { Navigate,useLocation } from "react-router-dom";
import Spinner from "../Components/Spinner/Spinner";
import { UserContext } from "../Context/Context";
import UseAdmin from "../hooks/UseAdmin";

const AdminRoutes = ({ children }) => {
    const { loader, user } = useContext(UserContext);
    const [isAdmin, adminLoading] = UseAdmin(user.email);
  const location = useLocation();
  if (loader || adminLoading) {
    return <Spinner></Spinner>;
  }
    console.log(isAdmin +'adminRoute');
    if (user&&isAdmin) {
      console.log('admin found');
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
