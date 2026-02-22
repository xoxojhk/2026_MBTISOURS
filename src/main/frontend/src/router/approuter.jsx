import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/login";
import Login2 from "../pages/login/loginPage";
import Header from "../pages/header/header";
import { Footer } from "../pages/footer/footer";

function AppRouter() {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Header />

      {/* 페이지별로 바뀌는 영역 */}
      <main className="flex-1 flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Login2 />} />
          </Routes>
      </main>

      {/* Footer 필요하면 여기 */}
      <Footer />
    </div>
  );
}

export default AppRouter;
