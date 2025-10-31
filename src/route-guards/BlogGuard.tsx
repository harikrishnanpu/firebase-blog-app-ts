import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";



const BlogGuard: React.FC<{ component: React.ReactElement | null }> = ({ component }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return component;
};

export default BlogGuard;
