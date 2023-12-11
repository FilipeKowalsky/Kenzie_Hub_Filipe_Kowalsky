import { useUserContext } from "../../providers/ContextApi"
import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoutes = () =>{
  const { user } = useUserContext();

  return user  ? <Outlet /> : <Navigate to="/"/>
}