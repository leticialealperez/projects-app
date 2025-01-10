import { BrowserRouter, Route, Routes } from "react-router";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import { Projects } from "../pages/Projects";
import { Error404 } from "../pages/Error404";
import { ProjectDetail } from "../pages/ProjectDetail";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Projects />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
