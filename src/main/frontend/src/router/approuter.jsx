import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/login";
import Login2 from "../pages/login/loginPage";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Main from "../pages/main/main";

function AppRouter() {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Header />

      {/* 페이지별로 바뀌는 영역 */}
      <main className="flex-1 flex overflow-y-auto">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login2 />} />
          </Routes>
      </main>

      {/* Footer 필요하면 여기 */}
      <Footer />
    </div>
  );
}

export default AppRouter;
