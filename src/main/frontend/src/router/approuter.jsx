import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/login";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default AppRouter;
