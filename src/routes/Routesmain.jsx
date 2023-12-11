import { Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "../components/protectedRoutes";
import { DashboardPage } from "../pages/DashboardPage/index";
import { HomePage } from "../pages/HomePage/index";
import { RegisterPage } from "../pages/RegisterPage/index";

export const RoutesMain = () =>{
  return(
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<ProtectedRoutes />}>
        <Route index element={<DashboardPage />}/>
      </Route>
    </Routes>
  )
}