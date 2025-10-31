import { Navigate } from "react-router-dom";
import LandingPage from "../Pages/home/Landing";
import { useAuth } from "../hooks/useAuth";

const AuthRedirect = () => {
  const {user, loading} = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return <Navigate to="/home" replace />;
  }

  return <LandingPage />;
};

export default AuthRedirect;
