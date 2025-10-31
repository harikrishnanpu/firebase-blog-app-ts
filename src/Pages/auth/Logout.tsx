import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase.Config";


const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    signOut(auth)
      .then(() => {
        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default LogoutPage;
